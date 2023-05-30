import React, { FC } from "react";
import Image from 'next/image';
import Link from 'next/link';

interface FooterInterface {
    message:string,
    socialMediaArray:{
        icon:string,
        link:string
    }[]
}

const Footer: FC<FooterInterface> = ({
    message,
    socialMediaArray
}) => {
    return <div>
        <h6>{message}</h6>
        <div>
            {socialMediaArray.map((data,key) => <Link href={data.link}><Image key={key} src={data.icon} alt={data.icon} width={24} height={24} /></Link>)}
        </div>
    </div>
}

export default Footer;