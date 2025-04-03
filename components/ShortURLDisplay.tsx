"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CopyIcon, CheckIcon } from "lucide-react";
import { toast } from "sonner";

interface ShortUrlDisplayProps {
  shortUrl: string;
}

export default function ShortUrlDisplay({ shortUrl }: ShortUrlDisplayProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    toast.success("URL copied to clipboard!", {icon:<CopyIcon className="h-4 w-4 mr-1 text-blue-500" />});
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 p-4 border rounded-lg bg-muted/50">
      <div className="flex justify-between items-center">
        <Label className="text-sm">Your shortened URL</Label>
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="h-8"
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4 mr-1" />
              Copied
            </>
          ) : (
            <>
              <CopyIcon className="h-4 w-4 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="mt-2 p-3 bg-background border rounded flex items-center overflow-hidden">
        <a
          href={shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline text-sm truncate"
        >
          {shortUrl}
        </a>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Click the link to test or use the copy button to share it
      </p>
    </div>
  );
}
