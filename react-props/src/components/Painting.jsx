export default function Painting({ img_url }) {
  // Painting(props)
  //src={props.img_url}
  return (
    <div>
      <img src={img_url} />
    </div>
  );
}
