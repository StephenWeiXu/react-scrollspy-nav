import React, { Component } from 'react';

class ScrollspyNav extends Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.scrollTargetIds = this.props.scrollTargetIds;
    this.activeNavClass = this.props.activeNavClass;
    this.scrollDuration = Number(this.props.scrollDuration) || 1000;

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
        increment = 10;
 
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

  getNavToSectionID(navHref) {
    return navHref.includes(this.hashIdentifier) ? navHref.replace(this.hashIdentifier, "") : "";
  }

  componentDidMount() {
    if (document.querySelector(`a[href='${this.homeDefaultLink}']`)) {
      document.querySelector(`a[href='${this.homeDefaultLink}']`).addEventListener("click", (event) => {
        event.preventDefault();
        this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
        window.location.hash = "";
      });
    }

    document.querySelector("ul[data-nav='list']").querySelectorAll("a").forEach( (navLink) => {
      navLink.addEventListener("click", (event) => {
        event.preventDefault();
        let sectionID = this.getNavToSectionID(navLink.getAttribute("href"));

        if(sectionID) {
          this.scrollTo(window.pageYOffset, document.getElementById(sectionID).offsetTop - document.querySelector("ul[data-nav='list']").scrollHeight, this.scrollDuration);
        } else {
          this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
        }
      });
    })

    window.onscroll = (event) => {
      let scrollSectionOffsetTop;
      this.scrollTargetIds.map((sectionID, index) => {
         scrollSectionOffsetTop = document.getElementById(sectionID).offsetTop - document.querySelector("ul[data-nav='list']").scrollHeight;

         if(window.pageYOffset >= scrollSectionOffsetTop && window.pageYOffset < scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight) {
          this.getNavLinkElement(sectionID).classList.add(this.activeNavClass);
          this.clearOtherNavLinkActiveStyle(sectionID)
         } else {
          this.getNavLinkElement(sectionID).classList.remove(this.activeNavClass);
         }

         if(((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) && (index === this.scrollTargetIds.length-1)) {
          this.getNavLinkElement(sectionID).classList.add(this.activeNavClass);
          this.clearOtherNavLinkActiveStyle(sectionID);
         }
      });
    }
  }

  clearOtherNavLinkActiveStyle(excludeSectionID) {
    this.scrollTargetIds.map((sectionID, index) => {
      if (sectionID !== excludeSectionID) {
        this.getNavLinkElement(sectionID).classList.remove(this.activeNavClass);
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
