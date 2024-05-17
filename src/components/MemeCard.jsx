function MemeCard({ meme, updateMeme, deleteMeme }) {
  function handleIncrememntLikes() {
    fetch(`http://localhost:3000/memes/${meme.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ likes: meme.likes + 1 }),
    })
      .then((response) => response.json())
      .then((updatedMeme) => updateMeme(updatedMeme));
  }

  function handleDelete() {
    fetch(`http://localhost:3000/memes/${meme.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => deleteMeme(meme.id));
  }

  return (
    <div className='card'>
      <img src={meme.img_url} alt={meme.caption} />

      <p>{meme.caption}</p>

      <button onClick={handleIncrememntLikes}>{meme.likes} Likes</button>

      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default MemeCard;
