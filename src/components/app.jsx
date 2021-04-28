import React, { Component } from 'react';
import Tshirt from './tshirt';
import Custom from './custom';
import { ColorExtractor } from 'react-color-extractor';
import Test from './test_movable';

class App extends Component {
  constructor() {
    super()
    this.state = {
      colorTshirt: 'green',
      activeFontFamily: 'Open Sans',
      text: 'Your text',
      fontsize: 12,
      showAddTextMenu: false,
      showAddTextTshirt: false,
      colorFont: '#22194D',
      idText: 0,
      showBottomMenu: false,
      fontStyle: 'normal',
      fontWeight: 'normal',
      textDecoration: 'none',
      textAlign: 'center',
      showAddDesign: false,
      showAddImageTshirt: false,
      showAddImageUpload: false,
      typeComponent: null,
      colors: [],
      selectedImg: null,
      showImageUpload: false,
      file: '',
      imagePreviewUrl: ''
    }
  }


  //createIdText = () => {
  //  this.setState({idText: this.state.idText + 1})
  //  this.setState({`showAddText_${this.state.idText}`: true})
  //  console.log("id");
  //  console.log(`showAddText_${this.state.idText +1}`);
  //}

  hideAddTextThirt = () => {
    this.setState({showAddTextTshirt: false})
  }

  showAddTextMenu = () => {
    this.setState({showAddTextMenu: true})
    this.setState({showAddTextTshirt: true})
    this.setState({showBottomMenu: true})
    this.setState({typeComponent: 'image_text'})
  }

  showFindDesign = () => {
    this.setState({showAddDesign: true})
    this.setState({showAddImageTshirt: true})
    this.setState({showBottomMenu: true})
    this.setState({typeComponent: 'image_design'})
  }

  hideMenu = (menu) => {
    switch (menu) {
      case 'add_text':
        this.setState({showAddTextMenu: false})
      case 'add_design':
        this.setState({showAddDesign: false})
      case 'add_upload':
        this.setState({showAddImageUpload: false})
    }
    this.setState({showBottomMenu: false})
  }

  showMenuImageBottom = (e) => {
    if (e.target.id == "image_design"){
      this.setState({showAddDesign: true})
      this.setState({showAddTextMenu: false})
    } else if (e.target.id == "image_text") {
      this.setState({showAddTextMenu: true})
      this.setState({showAddDesign: false})
    } else if (e.target.id == "image_upload") {
      this.setState({showAddImageUpload: true})
    }
    this.setState({showBottomMenu: true})
    this.setState({typeComponent: e.target.id})

  }

  hideComponent = () => {
    if (this.state.typeComponent == "image_design"){
      this.setState({showAddImageTshirt: false})
      this.setState({showAddDesign: false})
    } else if(this.state.typeComponent == "image_text") {
      this.setState({showAddTextTshirt: false})
      this.setState({showAddTextMenu: false})
    } else if(this.state.typeComponent == "image_upload") {
      this.setState({showImageUpload: false})
      this.setState({showAddImageUpload: false})
    }
    this.setState({showBottomMenu: false})
  }

  changeText = (e) => {
    var newtext = e.target.value.split(" ").join("\u00A0");
    this.setState({text: newtext})
  }

  changeFontFamily = (nextFont) => {
    this.setState({ activeFontFamily: nextFont.family })
  }

  changeTextFontSize = (e) => {
    var valueSize = parseInt(e.target.value);
    this.setState({fontsize: valueSize})
  }

  changeFontColor = (color) => {
    this.setState({colorFont: color.hex})
  }

  changeFontStyle = (e) => {
    switch (e) {
      case 'italic':
        if(this.state.fontStyle == e){
          this.setState({fontStyle: 'normal'})
        } else
        {
          this.setState({fontStyle: e})
        }
      case 'bold':
        if(this.state.fontWeight == e){
          this.setState({fontWeight: 'normal'})
        } else
        {
          this.setState({fontWeight: e})
        }
      case 'underline':
        if(this.state.textDecoration == e){
          this.setState({textDecoration: 'none'})
        } else
        {
          this.setState({textDecoration: e})
        }
      case 'justify':
        this.setState({textAlign: e})
      case 'left':
        this.setState({textAlign: e})
      case 'center':
        this.setState({textAlign: e})
      case 'right':
        this.setState({textAlign: e})
    }
  }

  changeTshirtColor = (e) => {
    this.setState({colorTshirt: e.target.getAttribute('data-id')})
  }

  quantitySize = (e) => {
    //console.log(e.target);
  }

  displayResult = () => {
    this.setState({showAddDesign: false})
    this.setState({showAddTextMenu: false})
    this.setState({showBottomMenu: false})
    this.setState({showAddImageUpload: false})
  }

  renderSwatches = () => {
    const { colors } = this.state

    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            backgroundColor: color,
            width: 20,
            height: 20
          }}
        />
      )
    })
  }

  getColors = (colors) => {

    this.setState(state => ({ colors: [state.colors, ...colors] }))
  }

  selectImg = (name) => {
    this.setState({selectedImg: name})
  }

  showUploadImage = () => {
    this.setState({showImageUpload: true})
    this.setState({showAddImageUpload: true})
    this.setState({showBottomMenu: true})
    this.setState({typeComponent: 'image_uploaded'})
  }

  _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <Test state={this.state} />
          </div>
          <div className="col-sm-6 col-xs-12">
            <Custom state={this.state} showAddTextMenu={this.showAddTextMenu} hideMenu={this.hideMenu} changeTshirtColor={this.changeTshirtColor} quantitySize={this.quantitySize} changeText={this.changeText} changeTextFontSize={this.changeTextFontSize} changeFontColor={this.changeFontColor} showHideFindDesign={this.showHideFindDesign} createIdText={this.createIdText} changeFontStyle={this.changeFontStyle} changeFontFamily={this.changeFontFamily} showFindDesign={this.showFindDesign} selectImg={this.selectImg} showUploadImage={this.showUploadImage} _handleImageChange={this._handleImageChange}/>
          <div>
            <ColorExtractor getColors={this.getColors}>
              <img src={`.././public/art_word/${this.state.selectedImg}.svg`} style={{ display: 'none' }} />
            </ColorExtractor>
            <ColorExtractor getColors={this.getColors}>
              <img src={this.state.imagePreviewUrl} style={{ display: 'none' }} />
            </ColorExtractor>
            <h4>Number of colors:</h4>
            <div style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>
              {this.renderSwatches()}
            </div>
          </div>
            <button className="button-continue">Continue</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
