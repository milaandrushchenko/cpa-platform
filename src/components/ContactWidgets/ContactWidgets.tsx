import InstagramIcon from '@assets/icons/instagram.svg?react';
import LinkedinIcon from '@assets/icons/linkedin.svg?react';
import TelegramIcon from '@assets/icons/telegram.svg?react';

import { type ContactWidgetDetails } from '@/types/general';

import style from './ContactWidgets.module.scss';

type ContactWidgetsProps = {
  widgets: Array<ContactWidgetDetails>;
};

export default function ContactWidgets({ widgets }: ContactWidgetsProps) {
  function getWidgetIcon(url: string): React.ReactElement | null {
    const urlLower = url.toLowerCase();

    if (urlLower.includes('t.me'))
      return <TelegramIcon className={style.icon} />;
    if (urlLower.includes('linkedin'))
      return <LinkedinIcon className={style.icon} />;
    if (urlLower.includes('instagram'))
      return <InstagramIcon className={style.icon} />;

    return null;
  }

  return (
    <ul className={style.widgetsContainer}>
      {widgets.map(({ url, name }) => (
        <li key={url}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name ?? ''}
          >
            {getWidgetIcon(url)}
          </a>
        </li>
      ))}
    </ul>
  );
}
