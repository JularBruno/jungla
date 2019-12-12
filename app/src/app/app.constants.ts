export class Constants {
  public static APP_VERSION = '0.0.8';

  // public static API_BASE_URL = 'http://172.20.16.179:3071/api';
  // public static FILES_BASE_URL = 'http://172.20.16.179:3071/files';
  public static API_BASE_URL = 'http://localhost:3071/api';
  public static FILES_BASE_URL = 'http://localhost:3071/files';

  // public static API_BASE_URL = 'http://vps-1060583-x.dattaweb.com:3071/api';
  // public static FILES_BASE_URL = 'http://vps-1060583-x.dattaweb.com:3071/files';

  // public static API_BASE_URL = 'http://192.168.2.101:3071/api';
  // public static FILES_BASE_URL = 'http://192.168.2.101:3071/files';

  public static API_METHOD_FILE_UPLOAD = '/files/upload';
  public static DEFAULT_AVATAR_NO_IMAGE = "assets/imgs/avatar.png";
  public static DEFAULT_CAR_NO_IMAGE = "assets/imgs/noimage.png";
  public static DEFAULT_SPONSOR_IMAGE = "assets/imgs/header.png";

  public static API_METHOD_ARTICLES = '/articles';
  public static API_METHOD_MP = '/mp';
  public static API_METHOD_USERS = '/users';
  public static API_METHOD_SUBSCRIPTIONS = '/subscriptions';
  public static API_METHOD_NOTIFICATIONS = '/notifications';

  //

  public static API_METHOD_SETTINGS = '/settings';

  public static CATEGORIES = [
    {
      id: '1',
      name: 'Productos'
    }
    ,
    {
      id: '2',
      name: 'Herramientas'
    }
    ,
    {
      id: '3',
      name: 'Capacitaciones'
    }
    ,
    {
      id: '4',
      name: 'Novedades'
    }
    ,
    {
      id: '5',
      name: 'Promociones'
    }
    ,
    {
      id: '6',
      name: 'Tutoriales'
    }
    ,
    {
      id: '7',
      name: 'Catálogo'
    }
  ];


  public static CATEGORY = {
    '1':'Productos'
    ,'2':'Herramientas'
    ,'3':'Capacitaciones'
    ,'4':'Novedades'
    ,'5':'Promociones'
    ,'6':'Tutoriales'
    ,'7':'Catálogo'
  }
  public static storage = {
    user: 'canadez_user',
  };

  public static mp = {
    env : "dev",
    prod : {
      publicKey   : "APP_USR-5f2b0e7d-2fc8-4326-b81e-9a7bc58876de",
    }
    ,
    dev : {
      publicKey   : "TEST-a21ebdf6-e09b-4b00-885c-49db6416db1b",
    }
  }

  // PUSH SERVER ENDPOINTS
  public static PUSH_APP_ID = '5d48975a93c87426fb9ed49e';
  public static PUSH_SERVER_URL = 'http://sd-1060583-h00012.ferozo.net:3050/api';
  public static PUSH_SERVER_REGISTER_ID = '/users/ensure';
  public static PUSH_GET_MESSAGE = '/message/';
  public static PUSH_ICON_COLOR = '#692F7B';
  public static PUSH_ICON_NAME = 'ic_stat_notifications';

}
