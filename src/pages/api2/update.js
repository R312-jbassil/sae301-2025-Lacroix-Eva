import pb from "../../../pocketbase/pb";
import { Collections } from "../../../pocketbase/pocketbase-types";

export async function POST({ request, cookies }) {
  try {
    const data = await request.json();
    console.log("📦 Données reçues :", data);

    if (!data.id) throw new Error("ID manquant");

    const cookie = cookies.get("pb_auth")?.value;
    if (cookie) pb.authStore.loadFromCookie(cookie);

    if (!pb.authStore.isValid) throw new Error("Utilisateur non authentifié");

    console.log("🧠 Tentative de mise à jour :", {
      id: data.id,
      code_svg_length: data.code_svg?.length,
      chat_history_type: typeof data.chat_history,
    });

    const record = await pb.collection(Collections.Lunette).update(data.id, {
      code_svg: data.code_svg || "",
      chat_history: data.chat_history || [],
    });

    console.log("✅ SVG mis à jour avec succès :", record.id);

    return new Response(JSON.stringify({ success: true, id: record.id }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Erreur updateSVG complète :", error);
    if (error?.response) console.error("📩 Réponse PocketBase :", error.response);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
