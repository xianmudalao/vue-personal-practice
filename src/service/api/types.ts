export interface IloginParams {
  userName: string;
  passWord: string | number;
}

export interface IloginApi {
  login: (params: IloginParams) => Promise<any>;
}
