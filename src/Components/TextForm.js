import React, { useState } from "react";

const TextForm = () => {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());

  const toSentenceCase = () => {
    const sentenceCaseText = text
      .toLowerCase()
      .split(". ")
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");
    setText(sentenceCaseText);
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "mytextfile.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="textform container py-4">
      {/* Judul */}
      <h1 className="text-gradient mb-4 text-center">Masukkan Paragraf Kamu</h1>

      {/* Textarea */}
      <div className="mb-3">
        <textarea
          className="form-control shadow-lg bg-dark text-light border-0 rounded-3"
          aria-label="With textarea"
          rows={8}
          value={text}
          onChange={onChangeHandler}
          placeholder="Tulis atau paste teks kamu di sini..."
        ></textarea>
      </div>

      {/* Tombol Aksi */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        <button className="btn btn-danger" onClick={toUpperCase}>
          Ubah Jadi Huruf Besar
        </button>
        <button className="btn btn-warning" onClick={toLowerCase}>
          Ubah Jadi Huruf Kecil
        </button>
        <button className="btn btn-success" onClick={toSentenceCase}>
          Ubah Jadi Gaya Kalimat
        </button>
        <button className="btn btn-info text-white" onClick={downloadTxtFile}>
          Unduh sebagai .txt
        </button>
      </div>

      {/* Statistik */}
      <div className="result-card text-center">
        <div className="row">
          <div className="col">
            <h2>Total Karakter</h2>
            <p><span>{text.length}</span></p>
          </div>
          <div className="col">
            <h2>Total Kata</h2>
            <p><span>{text.trim() ? text.trim().split(/\s+/).length : 0}</span></p>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="preview mt-4 p-3 bg-secondary rounded text-light">
        <h3 className="text-center mb-2">Hasil Teks Akhir</h3>
        <p className="mb-0">{text || "Teks kamu akan tampil di sini..."}</p>
      </div>
    </div>
  );
};

export default TextForm;
