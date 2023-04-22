import React, { useState } from "react"; 
import { Button, Checkbox, Divider, Form, Input, Typography } from "antd";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useUserAuth } from "../../context/UserAuthContext";
import { useEffect } from "react";
import {Page} from "../../components";



const Login2 = () => {
  const { logIn, googleSignIn, userRole, user, lang } = useUserAuth();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const onFinish = async values => {
    setloading(true);
    await logIn(values.email, values.password);
    setloading(false);
  };
  const clickGoogleBtn = async () => {
    googleSignIn();
  };
  useEffect(() => {
    if (user && userRole) {
      navigate(`/${lang}`);
    } else if (user && !userRole) {
      navigate(`/${lang}/register`);
    } else {
      navigate(`/${lang}/login`);
    }
  }, [lang, navigate, user, userRole]);

  return (
    <Page title="Connexion">
      <div className='auth'>
        <div className='auth-content'>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography.Title
              style={{
                fontSize: "42px",
                color: "#000336",
                fontWeight: "bold",
              }}
            >
              Connexion
            </Typography.Title>
            <Button
              type='default'
              icon={
                <span style={{ marginRight: "0.5rem" }}>
                  <FcGoogle />
                </span>
              }
              size='middle'
              onClick={clickGoogleBtn}
            >
              Continuer avec Google
            </Button>
            <Divider>OU</Divider>
            <Form
              name='login'
              layout='vertical'
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name='email'
                label="E-mail"
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir votre e-mail!",
                  },
                  {
                    type: "email",
                    message: "L'entrée n'est pas valide E-mail!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  size='middle'
                  placeholder="Votre e-mail"
                />
              </Form.Item>
              <Form.Item
                name='password'
                label="Mot de passe"
                rules={[
                  {
                    required: true,
                    message: "Veuillez saisir votre mot de passe!",
                  },
                  {
                    min: 6,
                    message:"Veuillez garder votre mot de passe court!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  placeholder="Votre mot de passe"
                  size='middle'
                />
              </Form.Item>
              <Form.Item style={{ marginTop: "-1.5rem" }}>
                <Link
                  to={`/${lang}/password/reset`}
                  style={{
                    color: "#2C4E7A",
                    textDecoration: "underline",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  Mot de passe oublié?
                </Link>
              </Form.Item>
              <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                  <Checkbox>Souviens-toi de moi</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  style={{ width: "100%" }}
                  size='middle'
                  loading={loading}
                >
                  Connexion
                </Button>
              </Form.Item>
              <Form.Item>
                <div style={{ display: "flex", gap: "2px" }}>
                  <p style={{ textAlign: "start", maxWidth: "200px" }}>
                    Vous n'avez pas encore de compte?
                  </p>
                  <Link
                    to={`/${lang}/register`}
                    style={{
                      color: "#2C4E7A",
                      textDecoration: "underline",
                      textAlign: "justify",
                    }}
                  >
                    S'inscrire maintenant!
                  </Link>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Login2;
