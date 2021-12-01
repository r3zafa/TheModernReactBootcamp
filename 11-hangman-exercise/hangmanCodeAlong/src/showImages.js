import img0 from "./img/F1.svg";
import img1 from "./img/F2.svg";
import img2 from "./img/F3.svg";
import img3 from "./img/F4.svg";
import img4 from "./img/F5.svg";
import img5 from "./img/F6.svg";
import img6 from "./img/F7.svg";
import img7 from "./img/F8.svg";
import React, { Component } from 'react';



class Image extends Component {
    /** by default, allow 6 guesses and use provided gallows images. */
    static defaultProps = {
        maxWrong: 7,
        images: [img0, img1, img2, img3, img4, img5, img6, img7]
    };

    render() {
        const altText = `${this.props.nWrong}/${this.props.maxWrong} guesses`;
        const imgSrc = this.props.nWrong <= this.props.maxWrong ? this.props.images[this.props.nWrong] : this.props.images[7];

        return ( < img src = { imgSrc }
            alt = { altText }
            /> )
        }

    }

    export default Image;