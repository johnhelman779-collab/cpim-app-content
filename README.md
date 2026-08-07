# cpim-app-content

CPIM device catalog and communication protocol definitions.

## Role

Defines industrial devices (HMI, PLC, SCADA, ROBOT) and their protocol metadata. Other services read this catalog; it does not talk to physical hardware.

## Run

```bash
npm install
npm run dev
```

Listens on `http://localhost:3003`.

## Endpoints

- `GET /health`
- `GET /devices`
- `GET /devices/:id`
- `GET /protocols`

## Status

v0.1.1 — active development (device / protocol catalog).

## Roadmap

See [ROADMAP.md](ROADMAP.md) for this service’s 3-year track.
