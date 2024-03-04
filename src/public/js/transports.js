const transports = localStorage.getItem('transports');
const wispUrl = localStorage.getItem('wispUrl') || "wss://wisp.mercurywork.shop"

function setTransports() {
        switch (transports) {
            case 'epoxy':
                setEpoxyTransport();
                break;
            default:
                setEpoxyTransport();
                break;
        }
}

function setDefaultTransport() {
    if (!transports) {
        localStorage.setItem('transports', 'epoxy');
        setEpoxyTransport();
    }
    else {
        setTransports();
    }
}

function recreateTransports() {
    setTransports();
}

//run recreateTransports every ten minutes
setInterval(recreateTransports, 600000);

function setEpoxyTransport() {
    BareMux.SetTransport('EpxMod.EpoxyClient', { wisp: localStorage.getItem('wispUrl') || wispUrl });
}
