import React, { useEffect } from "react";
import style from "./PopUpMarket.module.scss";
import { Link } from "react-router-dom";
import {
  IoGridOutline,
  IoArrowForward,
  IoRocketOutline,
  IoRocketSharp,
  IoChevronDownOutline,
} from "react-icons/io5";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { TbVector } from "react-icons/tb";
import { getAdminByWallet } from "../../../../../../redux/actions";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Wallet } from "ethers";
import { useDispatch } from "react-redux";

function PopUpMarket() {
  const { address } = useAccount();
  const dispatch = useDispatch();

  return (
    <div className={style.Container} data-dropdown>
      <div className={style.flexContainer}>
        <Link to="/comingsoon" className={style.button}>
          <div className={style.icon}>
            <IoGridOutline />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>Property Marketplace</h1> <IoArrowForward />
            </div>
            <p>Buying and selling houses has never been so easy</p>
          </div>
        </Link>
        <div className={style.buttonSoon}>
          <div className={style.icon}>
            <BsFileEarmarkPlus />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>Decentralised Loans</h1> <IoArrowForward />
            </div>
            <p>The ability to passively earn interest through DeFi 2.0 loans</p>
          </div>
        </div>
        <Link href="/IREO" className={style.button}>
          <div className={style.icon}>
            <TbVector />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>LaunchPad</h1> <IoArrowForward />
            </div>
            <p>Join and be part of the new real estate projects</p>
          </div>
        </Link>
        {/* <a href="/launchpad" className={style.button2}>
          <div className={style.icon}>
            <IoRocketSharp />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>Launchpad</h1> <IoArrowForward />
            </div>
            <p>Drive high-value web3 projects</p>
          </div>
        </a> */}

        <Link className={style.buttonMore}>
          <div className={style.icon}>
            <IoChevronDownOutline />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>More</h1> <IoArrowForward />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PopUpMarket;
