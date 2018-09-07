import React, { Component } from 'react';

class ScrollspyNav extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.scrollSectionIds = this.props.scrollSectionIds;
    this.activeLinkClassName = this.props.activeLinkClassName;

    if(this.props.router && this.props.router === "HashRouter") {
      this.homeDefaultLink = "#/";
      this.hashIdentifier = "#/#";
    } else {
      this.homeDefaultLink = "/";
      this.hashIdentifier = "#";
    }
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
    return document.querySelector(`a[href='${this.hashIdentifier}${sectionID}']`);
  }

  getNavToSectionID(locationHash) {
    return locationHash.includes(this.hashIdentifier) ? locationHash.replace(this.hashIdentifier, "") : "";
  }

  componentDidMount() {
    document.querySelector(`a[href='${this.homeDefaultLink}']`).addEventListener("click", (event) => {
      event.preventDefault();
      this.scrollTo(window.pageYOffset, 0, 1200);
      window.location.hash = "";
    });

    window.onpopstate = (event) => {
      event.preventDefault();
      let sectionID = this.getNavToSectionID(event.target.location.hash);

      if(sectionID) {
        this.scrollTo(window.pageYOffset, document.getElementById(sectionID).offsetTop - document.querySelector("ul[data-nav='list']").scrollHeight, 1200);
      } else {
        this.scrollTo(window.pageYOffset, 0, 1200);
      }
    }

    window.onscroll = (event) => {
      let scrollSectionOffsetTop;
      this.scrollSectionIds.map((sectionID, index) => {
         scrollSectionOffsetTop = document.getElementById(sectionID).offsetTop - document.querySelector("ul[data-nav='list']").scrollHeight;

         if(window.pageYOffset >= scrollSectionOffsetTop && window.pageYOffset < scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight) {
          this.getNavLinkElement(sectionID).classList.add(this.activeLinkClassName);
          this.clearOtherNavLinkActiveStyle(sectionID)
         } else {
          this.getNavLinkElement(sectionID).classList.remove(this.activeLinkClassName);
         }

         if(((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) && (index === this.scrollSectionIds.length-1)) {
          this.getNavLinkElement(sectionID).classList.add(this.activeLinkClassName);
          this.clearOtherNavLinkActiveStyle(sectionID);
         }
      });
    }
  }

  clearOtherNavLinkActiveStyle(excludeSectionID) {
    this.scrollSectionIds.map((sectionID, index) => {
      if (sectionID !== excludeSectionID) {
        this.getNavLinkElement(sectionID).classList.remove(this.activeLinkClassName);
      }
    });
  }

  render() {
    return(
      <ul data-nav="list">
        { this.props.children }
      </ul>
    );
  }
}

export default ScrollspyNav;
