import { Proxmox } from './model';
export declare const VALID_QEMU_INFO_SIMPLE: readonly ["backup", "balloon", "block-jobs", "blockstats", "capture", "chardev", "cpus", "cpustats", "dump", "history", "hotpluggable-cpus", "ioapic", "iothreads", "irq", "jit", "kvm", "memdev", "memory-devices", "memory_size_summary", "mice", "migrate", "migrate_cache_size", "migrate_capabilities", "migrate_parameters", "name", "network", "numa", "opcount", "pci", "pic", "profile", "qdm", "qtree", "ramblock", "rdma", "roms", "savevm", "sev", "snapshots", "spice", "status", "tpm", "usb", "usbhost", "usernet", "uuid", "version", "vm-generation-id", "vnc"];
export declare const VALID_QEMU_INFO_OPTION: readonly ["block", "lapic", "mtree", "qom-tree", "registers", "sync-profile", "trace-events"];
export declare const VALID_QEMU_INFO_PARAM: readonly ["rocker-of-dpa-flows", "rocker-of-dpa-groups", "rocker-ports"];
export declare type QemuInfoSimple = typeof VALID_QEMU_INFO_SIMPLE[number];
export declare type QemuInfoOption = typeof VALID_QEMU_INFO_OPTION[number];
export declare type QemuInfoParam = typeof VALID_QEMU_INFO_PARAM[number];
export interface USBHostInfo {
    bus: number;
    addr: number;
    port: string;
    speed: string;
    class: string;
    vendorId: string;
    productId: string;
    name: string;
}
export interface USBInfo {
    device: string;
    port: string;
    speed: string;
    product: string;
    id: string;
}
export declare class QmMonitor {
    private proxmox;
    private _vmid;
    private _node;
    monitor: (command: string) => Promise<string>;
    constructor(proxmox: Proxmox.Api, node: string, vmid: number);
    get vmid(): number;
    get node(): string;
    info(type: QemuInfoSimple): Promise<string>;
    info(type: QemuInfoOption, ...args: string[]): Promise<string>;
    info(type: QemuInfoParam, arg1: string, ...args: string[]): Promise<string>;
    infoUsb(filters?: {
        vendorId?: RegExp;
        productId?: RegExp;
        name?: RegExp;
    }): Promise<USBInfo[]>;
    deviceDel(id: string): Promise<string>;
    /**
     * list available usb on host
     */
    infoUsbhost(filters?: {
        vendorId?: RegExp;
        productId?: RegExp;
        name?: RegExp;
    }): Promise<USBHostInfo[]>;
    deviceAddById(id: string, params: {
        vendorId: string;
        productId: string;
    }): Promise<any>;
    deviceAddByPort(id: string, params: {
        bus: number;
        port: string;
    }): Promise<any>;
    deviceAddMissing(id: string, filters: {
        vendorId?: RegExp;
        productId?: RegExp;
        name?: RegExp;
    }): Promise<any>;
}
