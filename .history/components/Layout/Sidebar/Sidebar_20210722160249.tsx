import React, { useState } from "react";
import { Menu } from "antd";
import {
  SettingFilled,
  LogoutOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faAddressCard } from "@fortawesome/free-solid-svg-icons";

import { I }

import classes from "./Sidebar.module.less";
import ProfileCard from "./ProfileCard/ProfileCard";

interface ImenuKeys {
  title: string;
  icon: object;
}
interface Igrade {
  romanNumber: string;
  gradeName: string;
}

const navbarMenu = () => {

  const items: Readonly<ImenuKeys>[] = [
    { title: "Discover a country", icon: faGlobeAsia },
    { title: "Who am I?", icon: faAddressCard },
  ];
  
  return (
    <>
      {items?.map((el: ImenuKeys) => {
        return (
          <Menu.Item
            key={el?.title}
            className={classes.menuItem}
            icon={
              <FontAwesomeIcon className={classes.navIcon} icon={el?.icon} />
            }
          >
            {el?.title}
          </Menu.Item>
        );
      })}
    </>
  );
};

const grades: Readonly<Igrade>[] = [
  {
    romanNumber: "I",
    gradeName: "Apprentice",
  },
  {
    romanNumber: "II",
    gradeName: "Confirmed",
  },
  {
    romanNumber: "II",
    gradeName: "Expert",
  },
  {
    romanNumber: "IV",
    gradeName: "Master",
  },
];

const SideBar = () => {

  const [toggleCollapsed, setToggleColapsed] = useState(false);
  const [gearSpinning, setGearSpinning] = useState(false);
  const [userGrade, setUserGrade] = useState<number>(0);

  return (
    <Menu
      id="mainMenu"
      className={classes.sidebar}
      defaultSelectedKeys={["Discover a country"]}
      mode="inline"
      inlineCollapsed={toggleCollapsed}
    >
      {/* <div className={classes.openProfile}>
        <div
          className={cx(
            classes.cardProfile,
            "d-flex mb-2 justify-content-between"
          )}
        >
          <div className={cx("d-flex")}>
            <div className={classes.avatar}>
              <Image
                src="/Pierre_pro.jpg"
                layout="fill"
                objectFit="cover"
                alt="profile picture"
                unoptimized={process.env.NODE_ENV === "development"}
                className={classes.avatarImage}
              />
            </div>
            <div className={classes.informationContainer}>
              <p>Pierre Velluet</p>
              <p>European</p>
              <p>velluetp@gmail.com</p>
            </div>
            <Dropdown overlay={settingMenu()} placement="bottomRight" arrow>
              <PlusCircleFilled
                spin={gearSpinning}
                onMouseEnter={() => setGearSpinning(true)}
                onMouseLeave={() => setGearSpinning(false)}
                className={classes.plusIcon}
              />
            </Dropdown>
          </div>
        </div>
        <div className={classes.progressContainer}>
          <div className={"d-flex align-items-center"}>
            <p className={cx(classes.romanText, "me-1")}>
              {grades?.[userGrade]?.gradeName}
            </p>
            <Tooltip
              title={
                <div className="d-flex justify-content-center flex-column">
                  {grades?.map((el: Igrade) => {
                    return (
                      <div className="d-flex">
                        <div className={classes.romanInt}>
                          {el?.romanNumber}
                        </div>{" "}
                        <p className={classes.romanText}>{el?.gradeName}</p>{" "}
                      </div>
                    );
                  })}
                </div>
              }
              placement="right"
              color={"#C19434"}
              key={"settings"}
            >
              <QuestionCircleOutlined className={classes.infoGradeIcon} />
            </Tooltip>
          </div>
          <Progress
            status="active"
            showInfo={false}
            trailColor="lightgray"
            strokeColor={{
              "0%": "#FF4838",
              "100%": "green",
            }}
            percent={60}
          />
        </div>
      </div> */}
      <ProfileCard />
      {navbarMenu()}
    </Menu>
  );
};

export default SideBar;
