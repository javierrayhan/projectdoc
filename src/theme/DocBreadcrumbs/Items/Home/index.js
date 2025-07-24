import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import IconHome from '@theme/Icon/Home';
import styles from './styles.module.css';
export default function HomeBreadcrumbItem() {
  // const homeHref = useBaseUrl('/');
  const homeHref = 'https://javierrayhan.my.id';
  return (
    <li className="breadcrumbs__item">
      <a
        href = {homeHref}
        // target="_blank"
        // rel="noopener noreferrer"
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.home',
          message: 'Home page',
          description: 'The ARIA label for the home page in the breadcrumbs',
        })}
        className="breadcrumbs__link">

        <IconHome className={styles.breadcrumbHomeIcon} />
      </a>
    </li>
  );
}
