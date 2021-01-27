import proxmoxApi from "../src/index";
import { Agent } from "https";

const {
    PROXMOX_USERNAME,
    PROXMOX_PASSWORD,
    PROXMOX_HOST
} = process.env;

const px = proxmoxApi({
    agent: new Agent({
        rejectUnauthorized: false
    }),
    host: PROXMOX_HOST, 
    password: PROXMOX_PASSWORD, 
    username: PROXMOX_USERNAME,
})

async function f(){
    const ns = await px.nodes.$get();
    console.log(ns);
}

f();

process.stdin.resume();