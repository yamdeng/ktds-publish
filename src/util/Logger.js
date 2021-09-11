import rootStore from 'store/RootStore';
import Config from 'config/Config';
import moment from 'moment';

const Logger = {
  debug: function (message) {
    // eslint-disable-next-line
    console.debug(message);
  },
  info: function (message) {
    // eslint-disable-next-line
    console.info(message);
  },
  warn: function (message) {
    // eslint-disable-next-line
    console.warn(message);
  },
  error: function (message) {
    // eslint-disable-next-line
    console.error(message);
    try {
      let appStore = rootStore.appStore;
      let uiStore = rootStore.uiStore;
      let errorDoc = {};
      errorDoc.token = appStore.token;
      errorDoc.version = Config.version;
      errorDoc.message = message;
      errorDoc.created = moment().format('YYYY-MM-DD HH:mm:ss');
      errorDoc.currentRouteUrl = uiStore.currentRouteUrl || '';
      errorDoc.beforeRouteUrl = uiStore.beforeRouteUrl || '';
      errorDoc.userAgent = navigator.userAgent || '';
      errorDoc.message = message.substr(0, 2500);
    } catch (e) {
      // eslint-disable-next-line
      console.error('Logger error : ' + JSON.stringify(e));
    }
  },
  log: function (message) {
    // eslint-disable-next-line
    console.log(message);
  }
};

export default Logger;
