"use client";

import { useState,startTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkIcon, ArrowRightIcon, LoaderCircleIcon } from "lucide-react";
import { toast } from "sonner";
import ShortUrlDisplay from "@/components/ShortURLDisplay";
import { shortenUrl } from "@/app/actions/shortenURL";

export default function URLForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    startTransition(async () => {
      try {
        const short = await shortenUrl(url);
        setShortUrl(short);
        toast.success("URL shortened successfully!", {
          icon: <LinkIcon className="h-4 w-4 mr-1 text-green-500" />,
        });
      } catch (error) {
        console.error("Error shortening URL:", error);
        toast.error("Failed to shorten URL. Please try again.");
      } finally {
        setIsLoading(false);
      }
    });
  };

  return (
    <Card className="w-full max-w-md sm:mx-auto shadow-md">
      <CardHeader>
        <CardTitle className="text-center flex items-center justify-center gap-2">
          <LinkIcon className="h-6 w-6 text-blue-500" />
          URL Shortener
        </CardTitle>
      </CardHeader>
      <CardContent className="py-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url" className="text-sm">
              URL
            </Label>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                id="url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.example.com"
                className="flex-1"
                required
              />
              <Button
                type="submit"
                disabled={isLoading || !url}
                className="w-full sm:w-auto"
              >
                {isLoading ? (
                  <LoaderCircleIcon className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Shorten <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>

        {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}

        <div className="mt-6 text-center text-xs text-muted-foreground">
          A secure and fast way to create shortened URL
        </div>
      </CardContent>
    </Card>
  );
}
