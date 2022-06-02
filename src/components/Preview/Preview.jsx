import React from "react";

export const Preview = () => {

    const [state, setState] = useState(props.movieToPreview);

    useEffect(() => {
        setState(props.previewData)
    }, [props])

  return (
    <div className="preview">
      <img src={newMovie.imgUrl} alt="" />
    </div>
  );
};
