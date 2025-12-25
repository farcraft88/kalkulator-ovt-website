function submitData() {
  const tidur = document.getElementById("tidur").value;
  const kopi = document.getElementById("kopi").value;
  const scroll = document.getElementById("scroll").value;

  localStorage.setItem("tidur", tidur);
  localStorage.setItem("kopi", kopi);
  localStorage.setItem("scroll", scroll);

  window.location.href = "result.html";
}

function kembali() {
  window.location.href = "index.html";
}

function tampilkanHasil() {
  const tidur = Number(localStorage.getItem("tidur"));
  const kopi = Number(localStorage.getItem("kopi"));
  const scroll = Number(localStorage.getItem("scroll"));

  let skor = 0;
  if (tidur < 6) skor += 2;
  if (tidur < 4) skor += 3;
  if (kopi >= 2) skor += 1;
  if (scroll >= 3) skor += 2;
  if (scroll >= 5) skor += 3;

  let status = "", pesan = "";

  if (skor <= 2) {
    status = "AMAN";
    pesan = "Pikiranmu cukup tenang. Jangan dirusak sendiri.";
  } else if (skor <= 4) {
    status = "WASPADA";
    pesan = "Mulai mikir yang nggak-nggak. Tidur dulu.";
  } else if (skor <= 6) {
    status = "PARAH";
    pesan = "Kamu tidak capek. Kamu kebanyakan mikir.";
  } else {
    status = "KRITIS";
    pesan = "Diskusi internal tanpa moderator.";
  }

  const hasil = document.getElementById("hasil");
  if (hasil) {
    hasil.innerHTML = `
      Tingkat overthinking kamu:
      <strong>${status}</strong>
      <small>${pesan}</small>
    `;
  }
}

tampilkanHasil();
