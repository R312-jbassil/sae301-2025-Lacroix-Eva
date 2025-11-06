// src/pages/api/generate-svg.js
import { OpenAI } from 'openai';

// Récupération du token d'accès à partir des variables d'environnement
const HF_TOKEN = import.meta.env.HF_TOKEN;
const NOM_MODEL = import.meta.env.NOM_MODEL;

export const POST = async ({ request }) => {
    // Affiche la requête dans la console pour le débogage
    console.log(request);

    // Extraction des message du corps de la requête
    const messages  = await request.json();
    
    // Initialisation du client OpenAI avec l'URL de base et le token d'API
    const client = new OpenAI({
        baseURL: import.meta.env.HF_URL, // URL de l'API
        apiKey: HF_TOKEN, // Token d'accès pour l'API
    });
    
    // Création du message système pour guider le modèle
    let SystemMessage = 
        {
            role: "system", // Rôle du message
            content: "You are an SVG generation tool specialized in eyewear design. Generate only valid SVG code (without any explanation, text, or Markdown formatting). The SVG must represent glasses or sunglasses viewed from the front. The design should be clean, modern, and geometrically accurate — suitable for product customization. Use clear <path>, <circle>, <rect>, and <g> elements with descriptive id attributes such as  #monture, #branches, and #verres to allow dynamic color and shape customization. Do not include any background, <style>, text, comments, or external references. Output only the <svg> element and its contents.", // Contenu du message
        };
    
    // Appel à l'API pour générer le code SVG en utilisant le modèle spécifié
    const chatCompletion = await client.chat.completions.create({
        model: "Qwen/Qwen3-Next-80B-A3B-Instruct:novita", // Nom du modèle à utiliser
        messages: [SystemMessage, ...messages] // Messages envoyés au modèle, incluant le message système et l'historique des messages
    });
    
    // Récupération du message généré par l'API
    const message = chatCompletion.choices[0].message || "";
    
    // Affiche le message généré dans la console pour le débogage
    console.log("Generated SVG:", message);
    
    // Recherche d'un élément SVG dans le message généré
    const svgMatch = message.content.match(/<svg[\s\S]*?<\/svg>/i);
    
    // Si un SVG est trouvé, le remplace dans le message, sinon laisse une chaîne vide
    message.content = svgMatch ? svgMatch[0] : "";
    
    // Retourne une réponse JSON contenant le SVG généré
    return new Response(JSON.stringify({ svg: message }), {
        headers: { "Content-Type": "application/json" }, // Définit le type de contenu de la réponse
    });
};