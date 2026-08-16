export type DeviceType = "HMI" | "PLC" | "SCADA" | "ROBOT";

export type ProtocolId =
  | "OPC-UA"
  | "Modbus-TCP"
  | "EtherNet/IP"
  | "MQTT"
  | "TCP-Socket";

export interface DeviceTag {
  name: string;
  dataType: "bool" | "number" | "string";
  description: string;
}

export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  protocol: ProtocolId;
  endpoint: string;
  tags: DeviceTag[];
  status: "configured" | "retired";
}

export const protocols: Array<{
  id: ProtocolId;
  name: string;
  description: string;
  typicalDeviceTypes: DeviceType[];
}> = [
  {
    id: "OPC-UA",
    name: "OPC Unified Architecture",
    description: "Industrial interoperability protocol common for HMI/SCADA.",
    typicalDeviceTypes: ["HMI", "SCADA"],
  },
  {
    id: "Modbus-TCP",
    name: "Modbus TCP",
    description: "Simple register/coil protocol over TCP for PLCs.",
    typicalDeviceTypes: ["PLC"],
  },
  {
    id: "EtherNet/IP",
    name: "EtherNet/IP",
    description: "CIP-based industrial Ethernet protocol for controllers.",
    typicalDeviceTypes: ["PLC", "ROBOT"],
  },
  {
    id: "MQTT",
    name: "MQTT",
    description: "Lightweight pub/sub messaging for gateways and IoT bridges.",
    typicalDeviceTypes: ["SCADA"],
  },
  {
    id: "TCP-Socket",
    name: "TCP Socket",
    description: "Custom binary/text framing over raw TCP sockets.",
    typicalDeviceTypes: ["ROBOT", "HMI"],
  },
];

export const devices: Device[] = [
  {
    id: "dev-hmi-a",
    name: "HMI Panel A",
    type: "HMI",
    protocol: "OPC-UA",
    endpoint: "opc.tcp://10.0.1.10:4840",
    status: "configured",
    tags: [
      { name: "LineSpeed", dataType: "number", description: "Conveyor line speed (m/min)" },
      { name: "AlarmActive", dataType: "bool", description: "Operator alarm indicator" },
    ],
  },
  {
    id: "dev-plc-line1",
    name: "PLC Line 1",
    type: "PLC",
    protocol: "Modbus-TCP",
    endpoint: "modbus://10.0.2.20:502",
    status: "configured",
    tags: [
      { name: "Coil_Start", dataType: "bool", description: "Start coil for line motor" },
      { name: "Register_Temp", dataType: "number", description: "Process temperature (°C)" },
    ],
  },
  {
    id: "dev-plc-pack",
    name: "PLC Packaging",
    type: "PLC",
    protocol: "EtherNet/IP",
    endpoint: "ethernetip://10.0.2.30:44818",
    status: "configured",
    tags: [
      { name: "MotorRun", dataType: "bool", description: "Packaging motor run command" },
      { name: "FaultCode", dataType: "number", description: "Controller fault code" },
    ],
  },
  {
    id: "dev-scada-gw",
    name: "SCADA Gateway",
    type: "SCADA",
    protocol: "MQTT",
    endpoint: "mqtt://10.0.3.40:1883",
    status: "configured",
    tags: [
      { name: "PlantPower", dataType: "number", description: "Plant power draw (kW)" },
      { name: "Heartbeat", dataType: "number", description: "Gateway heartbeat counter" },
    ],
  },
  {
    id: "dev-robot-1",
    name: "Robot Cell 1",
    type: "ROBOT",
    protocol: "TCP-Socket",
    endpoint: "tcp://10.0.4.50:9000",
    status: "configured",
    tags: [
      { name: "PoseX", dataType: "number", description: "Robot TCP X position (mm)" },
      { name: "ProgramState", dataType: "string", description: "Active program state" },
    ],
  },
];
