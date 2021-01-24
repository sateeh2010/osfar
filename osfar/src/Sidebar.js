import React from "react";
import { Home, KeyboardArrowRight, Search, NotificationsNone, MailOutline, BookmarkBorder, PermIdentity, MoreHoriz, ListAlt } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import './Sidebar.css';
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* osfar Icon */}

      <KeyboardArrowRight className="sidebar__twitterIcon"/>

      <SidebarOption active Icon={Home} text="Home"/>
      <SidebarOption Icon={Search} text="Explore"/>
      <SidebarOption Icon={NotificationsNone} text="Notification"/>
      <SidebarOption Icon={MailOutline} text="Messages"/>
      <SidebarOption Icon={BookmarkBorder} text="Bookmarks"/>
      <SidebarOption Icon={ListAlt} text="Lists"/>
      <SidebarOption Icon={PermIdentity} text="Profile"/>
      <SidebarOption Icon={MoreHoriz} text="More  "/>

      {/* Button -> kalam */}
      <Button variant="outlined" fullWidth className="sidebar__tweet">Tweet</Button>
    </div>
  );
}

export default Sidebar;
