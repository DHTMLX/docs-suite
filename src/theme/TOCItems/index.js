import TOCItems from '@theme-original/TOCItems';
import styles from './styles.module.css';

export default function TOCItemsWrapper(props) {
  return (
    <>
      <TOCItems {...props} />
      <div className={styles.contactSupportLinkWrapper}>
        Need more help?
        <a
          href="https://dhtmlx.com/docs/technical-support.shtml"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.contactSupportLink} pagination-nav__link`}
        >
          Contact Support
        </a>
      </div>
    </>
  );
}
