export function PhotosIndex(props) {
  return (
    <div>
      <h1>All Photos</h1>
      {props.photos.map((photo) => (
        <div key={photo.id}>
          <h1>date: {photo.date}</h1>
          <img src={photo.image_url} />
        </div>
      ))}
    </div>
  );
}
