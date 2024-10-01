"use client";

import { getCatData } from "@/services/product-service";
import { Dropdown } from "flowbite-react";
import Link from "next/link";

export default function FormInput() {
    const getCatDatas = async () => {
        console.log('loading...');

        console.log(await getCatData());

        console.log('loaded!');
    }

    return (
        <>
            <Dropdown label="Dropdown button">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>

            <Link href="/users">User Page</Link>

            <button className="bg-pink-300 p-3" onClick={getCatDatas}>send</button>
        </>
    )
}