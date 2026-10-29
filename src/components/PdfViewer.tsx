import { useId } from 'react';
import { Button, ButtonVariant } from '@argousiere/vespertina-design-system/react';
import Link from './Link';

export interface PdfViewerProps {
  src: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ src, title, className, children }) => {
  const id = useId();

  return (
    <>
      <button type="button" className={className} commandfor={id} command="show-modal">
        {children}
      </button>

      <dialog id={id} className="app-pdf-viewer" aria-label={title} closedby="any">
        <header className="app-pdf-viewer__header">
          <h2 className="app-pdf-viewer__title">{title}</h2>
          
          <Link className="app-pdf-viewer__link" href={src} label="Open in new tab" external />
          
          <form method="dialog">
            <Button type="submit" label="Close" icon="close" variant={ButtonVariant.SECONDARY} />
          </form>
        </header>

        <iframe className="app-pdf-viewer__frame" src={src} title={title} loading="lazy" />
      </dialog>
    </>
  );
};

export default PdfViewer;
