import React, { Component } from 'react';

class ScrollableNav extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.scrollSectionIds = this.props.scrollSectionIds;
  }

  easeInOutQuad(current_time, start, change, duration) {
      current_time /= duration/2;
      if (current_time < 1) return change/2*current_time*current_time + start;
      current_time--;
      return -change/2 * (current_time*(current_time-2) - 1) + start;
  };

  scrollTo(start, to, duration) {
    let change = to - start,
        currentTime = 0,
        increment = 30;
 
    let animateScroll = () => {        
        currentTime += increment;
        let val = this.easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
  }

  getNavLinkElement(sectionID) {
    return document.querySelector(`a[href='#/${sectionID}']`);
  }

  componentDidMount() {
    window.onpopstate = (event) => {
      event.preventDefault();
      let sectionID = event.target.location.hash.replace("#/", "");

      if(sectionID) {
        this.scrollTo(window.pageYOffset, document.getElementById(sectionID).offsetTop - document.getElementsByClassName("nav")[0].scrollHeight, 1200);
      } else {
        this.scrollTo(window.pageYOffset, 0, 1200);
      }
    }

    window.onscroll = (event) => {
      let scrollSectionOffsetTop;
      this.scrollSectionIds.map((sectionID, index) => {
         scrollSectionOffsetTop = document.getElementById(sectionID).offsetTop - document.getElementsByClassName("nav")[0].scrollHeight;

         if(window.pageYOffset >= scrollSectionOffsetTop && window.pageYOffset < scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight) {
          this.getNavLinkElement(sectionID).classList.add("is-active");
          this.clearOtherNavLinkActiveStyle(sectionID)
         } else {
          this.getNavLinkElement(sectionID).classList.remove("is-active");
         }

         if(((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) && (index === this.scrollSectionIds.length-1)) {
          this.getNavLinkElement(sectionID).classList.add("is-active");
          this.clearOtherNavLinkActiveStyle(sectionID);
         }
      });
    }
  }

  clearOtherNavLinkActiveStyle(excludeSectionID) {
    this.scrollSectionIds.map((sectionID, index) => {
      if (sectionID !== excludeSectionID) {
        this.getNavLinkElement(sectionID).classList.remove("is-active");
      }
    });
  }

  render() {
    return(
      <ul>
        { this.props.children }
      </ul>
    );
  }
}

export default ScrollableNav;
