import { notification } from 'antd';
import { createContext, useContext } from 'react';

export const NotificationContext = createContext({});

export const NotificationProvider = ({ children }) => {
  const [apiNotification, contextHolder] = notification.useNotification();
  const notify = (type, message, description) => {
    apiNotification[type]({
      message: message,
      description: description,
    });
  };
  const contextValue = {
    notify,
  };
  return (
    <NotificationContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
