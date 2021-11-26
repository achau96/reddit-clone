const PostType = ({ handleChange2, selectedType }) => {
  return (
    <div className="tabBox">
      {selectedType === 'post' && (
        <textarea
          className="inputText"
          name="text"
          placeholder="Text (Optional)"
          rows={6}
          onChange={handleChange2}
        />
      )}
      {selectedType === 'media' && (
        <div className="mediaInput">
          <input
            type="file"
            name="file"
            onChange={(e) => {
              console.log(e.target.files[0]);
            }}
          />
        </div>
      )}
      {selectedType === 'link' && (
        <input className="linkInput" type="url" placeholder="URL" />
      )}
    </div>
  );
};

export default PostType;
