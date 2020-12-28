import xapi from 'xapi';

const MyPMR = 'myname@mycompany.webex.com';

function listenToGui() {
  xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
    if (event.PanelId === 'SpeedDial') {
        xapi.Command.Dial({ Number: MyPMR});
    } 
  });
}
listenToGui();
