# Project Portfolio Assets Guide

Place your project screenshots or images in company/project subfolders under `fararahe/assets/images/`. The portfolio page (`index.html`) automatically detects, resolves fallbacks, and displays them.

## Directory Structure & Mappings

```
fararahe/assets/images/
├── nuun/
│   └── project-nuun-iot.png (or .jpg)
├── hitachi/
│   └── project-hitachi-banking.png (or .jpg)
├── purwantara/
│   └── project-purwantara-edc.png (or .jpg)
├── evaclo/
│   └── project-evaclo-logistics.png (or .jpg)
├── farbeth/
│   └── project-farbeth-studio.png (or .jpg)
├── kamaya/
│   └── project-bimbel-kamaya.png (or .jpg)
├── mini-edc/
│   └── project-mini-edc.png (or .jpg)
├── apbionet/
│   └── project-apbionet-genomics.png (or .jpg)
└── revou/
    └── project-revou-dashboard.png (or .jpg)
```

| Company / Project Folder | Recommended File Name | Project Name |
| :--- | :--- | :--- |
| `nuun/` | `project-nuun-iot.png` | **PT. Dunia Maya Teknologi** — Nuun IoT, IndiHome SMART CCTV, NUUN POS & RFID |
| `hitachi/` | `project-hitachi-banking.png` | **PT. Hitachi Channel Solutions** — Digital Banking & POS Terminal |
| `purwantara/` | `project-purwantara-edc.png` | **PT. Purnama Pasifik Nuswantara** — Purwantara IPG EDC Terminal |
| `evaclo/` | `project-evaclo-logistics.png` | **PT. Evaclo Digital Logistek** — Fleet & Telemetry App |
| `farbeth/` | `project-farbeth-studio.png` | **FARBETH App & Web Studio** — Software Estimator |
| `kamaya/` | `project-bimbel-kamaya.png` | **Bimbel Kamaya** — Learning Portal & CMS |
| `mini-edc/` | `project-mini-edc.png` | **Mini EDC Terminal Sandbox** — Kotlin POS Simulator |
| `apbionet/` | `project-apbionet-genomics.png` | **Perdana University / APBioNET** — Bioinformatics Suite |
| `revou/` | `project-revou-dashboard.png` | **RevoU Life Dashboard** — Pomodoro & Tasks |

### Supported formats & Auto-Fallback:
- `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`
- `index.html` loads projects dynamically from `fararahe/data/projects.js`.
- The auto-fallback resolver (`data-candidates`) checks the company subfolder (`{folder}/{name}.png`, `{folder}/{name}.jpg`), as well as root images. If not found, a clean styled placeholder displays with slot instructions. To add, edit, or reorder projects, simply update `fararahe/data/projects.js`.
