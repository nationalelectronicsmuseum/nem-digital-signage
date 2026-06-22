# National Electronics Museum Digital Signage

The goal of this project is to enhance the museum experience by maximizing the delivery of information to all visitors through accessible, inclusive, and user-friendly digital signage software, ensuring that knowledge is shared without barriers.

Features include: - Touch screen navigation - Audible speech of multiple languages - Information read in multiple languages - Adjustable font - Adjustable font size - Interactive signage involving pictures, figures, videos, and audio.

Build requirements (taken care of by setup.sh):
nodejs
npm
vitejs
python
python-pip
googletrans (python library)
tqdm (python library)

How to setup:
Linux (Debian 13):
Run the setup.sh script from the repository's root directory.

How to dev:
npm run dev

Dev notes for updating localisation (linux):
sudo apt install python3.13-venv
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 ./scripts/updateLocalizations.py

    deactivate

Resources:
[Live netlify app](https://nemdigitalsignage.netlify.app/)
