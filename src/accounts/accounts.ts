import { Request, RequestHandler, Response } from "express";
import OracleDB from "oracledb";

/*
    Nampespace que contém tudo sobre "contas de usuários"
*/
export namespace AccountsHandler {
  /**
   * Tipo UserAccount
   */
  export type UserAccount = {
    id: number | undefined;
    email: string;
    password: string;
    complete_name: string;
  };

  async function login(
    email: string,
    password: string
  ) {
    let conn = await OracleDB.getConnection({
      user: "BD130824249",
      password: "Rzizp7",
      connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=BD-ACD)(PORT=1521))(CONNECT_DATA=(SERVER=puc)(SERVICE_NAME=xe)))",
    });

    const result = await conn.execute(
      `
        SELECT * 
        FROM ACCOUNTS 
        WHERE email = :email and password = :password
      `,
      [email, password]
    );

    const linhas = result.rows;

    console.dir(linhas, { depth: null });

    await conn.close();

    return;
  }

  export const loginHandler: RequestHandler = (req: Request, res: Response) => {
    const pEmail = req.get("email");
    const pPassword = req.get("password");

    if (pEmail && pPassword) {
      const authData = login(pEmail, pPassword);

      res.send({ msg: "Função login" });
    } else {
      res.send({ msg: "Parâmetros Faltando", code: res.statusCode });
    }
  };

  /**
   * Função para verificar se o email existe.
   * @param pEmail email do usuário do tipo @type { string }
   * @returns @type { boolean } se existe algum email cadastrado ou não.
   */
  // function verifyAccount(pEmail: string): boolean {
  //   const findAccount = accountsDatabase.find(
  //     (ua: AccountsHandler.UserAccount) => ua.email === pEmail
  //   );

  //   return findAccount ? true : false;
  // }

  /**
   * Função para tratar a rota HTTP /signUp.
   * @param req Requisição http tratada pela classe @type { Request } do express
   * @param res Resposta http a ser enviada para o cliente @type { Response }
   */
  // export const createAccountRoute: RequestHandler = (
  //   req: Request,
  //   res: Response
  // ) => {
  //   // Passo 1 - Receber os parametros para criar a conta
  //   const pName = req.get("name");
  //   const pEmail = req.get("email");
  //   const pPassword = req.get("password");
  //   const pBirthdate = req.get("birthdate");

  //   if (pName && pEmail && pPassword && pBirthdate) {
  //     if (!verifyAccount(pEmail)) {
  //       const newAccount: AccountsHandler.UserAccount = {
  //         name: pName,
  //         email: pEmail,
  //         password: pPassword,
  //         birthdate: pBirthdate,
  //       };
  //       const ID = AccountsHandler.saveNewAccount(newAccount);
  //       res.status(200).send({
  //         msg: `Nova conta adicionada. Código: ${ID}`,
  //         code: res.statusCode,
  //       });
  //     } else {
  //       res.status(404).send({
  //         msg: "Já existe uma conta com email cadastrado",
  //         code: res.statusCode,
  //       });
  //     }
  //   } else {
  //     res.status(400).send({
  //       msg: "Parâmetros inválidos ou faltantes.",
  //       code: res.statusCode,
  //     });
  //   }
  // };

  /**
   * Função para tratar a rota HTTP /login.
   * @param req Requisição http tratada pela classe @type { Request } do express
   * @param res Resposta http a ser enviada para o cliente @type { Response }
   */
  // export const loginAccountRoute: RequestHandler = (
  //   req: Request,
  //   res: Response
  // ) => {
  //   const pEmail = req.get("email");
  //   const pPassword = req.get("password");

  //   if (pEmail && pPassword) {
  //     const findAccount = accountsDatabase.find(
  //       (ua) => ua.email === pEmail && ua.password === pPassword
  //     );

  //     if (findAccount) {
  //       res.statusCode = 200;
  //       res.send({ msg: "Sucesso!", code: res.statusCode });
  //     } else {
  //       res.statusCode = 404;
  //       res.send({
  //         msg: "Usuário e ou senha inválidos!",
  //         code: res.statusCode,
  //       });
  //     }
  //   } else {
  //     res.statusCode = 400;
  //     res.send({
  //       msg: "Parâmetros inválidos ou faltantes",
  //       code: res.statusCode,
  //     });
  //   }
  // };

  /**
   * Função para tratar a rota HTTP /login.
   * @param req Requisição http tratada pela classe @type { Request } do express
   * @param res Resposta http a ser enviada para o cliente @type { Response }
   */
  // export const getAllAccountsRoute: RequestHandler = (
  //   req: Request,
  //   res: Response
  // ) => {
  //   if (accountsDatabase.length <= 0) {
  //     res
  //       .status(200)
  //       .send({
  //         msg: "Não foi possivel encontrar nenhuma conta",
  //         code: res.statusCode,
  //       });
  //   } else {
  //     res
  //       .status(200)
  //       .send({
  //         LISTA: accountsDatabase,
  //         qtdAccounts: accountsDatabase.length,
  //         code: res.statusCode,
  //       });
  //   }
  // };
}
