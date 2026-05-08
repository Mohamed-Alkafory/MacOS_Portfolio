import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfFile = ({ data }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  if (!data || !data.path) return null;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900 overflow-hidden">
      <div id="window-header" className="flex-none border-b border-gray-200 dark:border-zinc-700">
        <WindowControls target="pdffile" />
        <h2 className="flex-1 text-center font-bold text-sm truncate px-4">
          {data.name || "Document.pdf"}
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-gray-200 dark:bg-zinc-800 px-2 py-0.5 rounded text-[10px] font-medium">
             <button 
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(prev => prev - 1)}
                className="hover:text-blue-500 disabled:opacity-30"
             >
                <ChevronLeft size={12} />
             </button>
             <span>{pageNumber} / {numPages || "-"}</span>
             <button 
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber(prev => prev + 1)}
                className="hover:text-blue-500 disabled:opacity-30"
             >
                <ChevronRight size={12} />
             </button>
          </div>
          <a
            href={data.path}
            download
            className="cursor-pointer p-1 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded transition-colors"
            title="Download"
          >
            <Download className="size-4 text-gray-600 dark:text-zinc-400" />
          </a>
        </div>
      </div>
      
      <div 
        className="overflow-auto p-4 flex justify-center custom-scrollbar bg-zinc-50 dark:bg-zinc-900/50"
      >
        <div className="shadow-lg h-fit border border-gray-200 dark:border-zinc-700 rounded-sm">
          <Document 
            file={data.path} 
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="text-sm text-gray-500 p-10 min-w-[600px] text-center">Loading Certificate...</div>}
          >
            <Page 
                pageNumber={pageNumber} 
                renderTextLayer={false} 
                renderAnnotationLayer={false}
                width={750}
                className="max-w-full"
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

const PdfFileWindow = WindowWrapper(PdfFile, "pdffile");
export default PdfFileWindow;
