// generator.js — handles generating SVG from prompt, previewing, copying and saving
(function () {
  const generateButton = document.getElementById('generate-button');
  const saveButton = document.getElementById('save-button');
  const editButton = document.getElementById('edit-button');
  const userPrompt = document.getElementById('user-prompt');
  const svgContainer = document.getElementById('svg-container');
  const svgOutput = document.getElementById('svg-output');
  const downloadLink = document.getElementById('download-svg');
  const copyBtn = document.getElementById('copy-svg');
  const saveName = document.getElementById('save-name');

  let promptList = [];

  async function generateSVG(payload) {
    const res = await fetch('/api2/generateSVG', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await res.json();
  }

  function extractSvg(content) {
    if (!content) return '';
    const m = content.match(/<svg[\s\S]*?<\/svg>/i);
    return m ? m[0] : '';
  }

  async function handleGenerate() {
    const prompt = (userPrompt?.value || '').trim();
    if (!prompt) return alert('Entrez un prompt.');
    promptList = [{ role: 'user', content: prompt }];

    svgContainer.innerHTML = '<span class="loading loading-ring loading-xl"></span>';
    generateButton.setAttribute('disabled', '');
    editButton?.setAttribute('disabled', '');

    try {
      const data = await generateSVG(promptList);
      // server returns { svg: { content: '<svg...'} } or similar
      const svgContent = (data && data.svg && data.svg.content) ? data.svg.content : (data && data.content) ? data.content : '';
      const code = extractSvg(svgContent);
      svgContainer.innerHTML = code || '<span class="text-gray-400">Aucun SVG généré</span>';

      // update download link
      if (code) {
        downloadLink.href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(code);
        downloadLink.setAttribute('download', (saveName.value || 'design') + '.svg');
      } else {
        downloadLink.href = '#';
        downloadLink.removeAttribute('download');
      }

      // update a hidden output if present
      if (svgOutput) svgOutput.textContent = code;
    } catch (err) {
      console.error(err);
      svgContainer.innerHTML = '<div class="text-error">Erreur lors de la génération</div>';
    } finally {
      generateButton.removeAttribute('disabled');
      editButton?.removeAttribute('disabled');
    }
  }

  generateButton?.addEventListener('click', handleGenerate);

  // copy svg code
  copyBtn?.addEventListener('click', async () => {
    const code = svgContainer.querySelector('svg') ? svgContainer.querySelector('svg').outerHTML : (svgOutput ? svgOutput.textContent : '');
    if (!code) return setTemporary(copyBtn, 'Aucun code');
    try {
      await navigator.clipboard.writeText(code);
      setTemporary(copyBtn, 'Copié ✓');
    } catch (err) {
      console.error(err);
      setTemporary(copyBtn, 'Erreur');
    }
  });

  // Save generated SVG to backend
  async function saveSVG() {
    const code = svgContainer.querySelector('svg') ? svgContainer.querySelector('svg').outerHTML : (svgOutput ? svgOutput.textContent : '');
    if (!code) return alert('Aucun SVG à sauvegarder.');
    const name = (saveName?.value || prompt('Nom du design') || 'design');

    const user = (() => {
      try { return JSON.parse(localStorage.getItem('user') || 'null'); } catch { return null; }
    })();

    const params = {
      name: name,
      code_svg: code,
      chat_history: JSON.stringify(promptList),
      user: user?.id ?? null,
    };

    saveButton.setAttribute('disabled', '');
    saveButton.textContent = 'Enregistrement…';
    try {
      const res = await fetch('/api2/saveSVG', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });
      const json = await res.json();
      if (json && json.success) {
        alert('SVG sauvegardé.');
      } else {
        console.error('save response', json);
        alert('Erreur lors de la sauvegarde.');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur réseau.');
    } finally {
      saveButton.removeAttribute('disabled');
      saveButton.textContent = 'Enregistrer';
    }
  }

  saveButton?.addEventListener('click', saveSVG);

  // simple preset buttons (fill prompt and trigger generation)
  document.querySelectorAll('[data-preset]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const p = btn.getAttribute('data-preset') || '';
      userPrompt.value = p;
    });
  });

  function setTemporary(el, text, ms = 1400) {
    if (!el) return;
    const orig = el.textContent;
    el.textContent = text;
    setTimeout(() => (el.textContent = orig), ms);
  }

})();
