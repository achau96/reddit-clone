const PostType = ({ handleMedia, handleChange2, selectedType }) => {
  return (
    <div className="tabBox">
      {selectedType === 'post' && (
        <textarea
          className="inputText"
          name="description"
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
            accept="image/*,video/*"
            onChange={(e) => {
              handleMedia(e);
              console.log(e.target.files[0]);
            }}
          />
        </div>
      )}
      {selectedType === 'link' && (
        <input
          className="linkInput"
          type="url"
          name="url"
          placeholder="URL"
          onChange={handleChange2}
        />
      )}
    </div>
  );
};

export default PostType;
