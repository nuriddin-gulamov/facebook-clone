function PostBody({ title, image }) {
  return <div className="pt-[10px]">
    <h3 className="px-[10px]">{title}</h3>
    <img src={image} alt="" className="mt-[10px]" />
  </div>;
}

export default PostBody;