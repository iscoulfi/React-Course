import React from 'react';

type ImageInputProps = { imageRef: React.RefObject<HTMLInputElement>; imageError: string };

class ImageInput extends React.Component<ImageInputProps> {
  render() {
    return (
      <div>
        <div>
          <label>Upload image</label>
          <input type="file" name="myImage" accept="image/*" ref={this.props.imageRef} />
        </div>
        {this.props.imageError ? <p>{this.props.imageError}</p> : ''}
      </div>
    );
  }
}

export default ImageInput;
