import { useState } from "react";

function MemeForm({ memes, setMemes }) {
  const URL = "http://localhost:3000/memes";

  const [img_url, setImgURL] = useState("");
  const [caption, setCaption] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //  second version:  body: JSON.stringify({ img_url: img_url, caption: caption, likes: 0 }),
      body: JSON.stringify({ img_url, caption, likes: 0 }),
    })
      .then((response) => response.json())
      .then((newMeme) => {
        setMemes([newMeme, ...memes]);
      });

    setImgURL("");
    setCaption("");
  }

  // onChange PUT IT SOMEWHERE
  //value PUT IT SOMEWHERE
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='img_url'>Image URL:</label>

      <input
        name='img_url'
        type='text'
        value={img_url}
        onChange={(event) => {
          setImgURL(event.target.value);
        }}
      />

      <label htmlFor='caption'>Caption:</label>

      <input
        name='caption'
        type='text'
        value={caption}
        onChange={(event) => {
          setCaption(event.target.value);
        }}
      />

      <input type='submit' value='Add Meme' />
    </form>
  );
}

export default MemeForm;
