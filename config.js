// Sambungan Supabase (projek AWARD).
// anonKey = "anon public" / "publishable" key dari Supabase → Project Settings → API Keys.
// Kunci ini memang untuk pelayar dan selamat didedahkan; akses dikawal oleh RLS dalam supabase-setup.sql.
// JANGAN letak "service_role" / "secret" key di sini.
// Jika anonKey kosong, app jalan dalam mod satu peranti (localStorage).
window.CABUTAN_SUPABASE = {
  url: "https://sntwokzcoocpdeopcirg.supabase.co",
  anonKey: ""
};
