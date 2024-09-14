import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";


export const Route = createLazyFileRoute("/")({
  component: Index,
});

type BookmarkCard = {
  name: string;
  url: string;
  description: string;
};

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [bookmarkCard, setBookmarkCard] = useState<BookmarkCard>({
    name: "",
    url: "",
    description: "",
  });
  const [bookmarkCards, setBookmarkCards] = useState<BookmarkCard[]>([]);

  return (
    <div className="p-2 relative flex flex-col items-center justify-center">
      <div className="absolute top-0 right-5">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger>
            <Button variant="default">
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a new Bookmark Card</DialogTitle>
              <input
                type="text"
                placeholder="Name"
                className="bg-background"
                onChange={(e) =>
                  setBookmarkCard({ ...bookmarkCard, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="URL"
                className="bg-background"
                onChange={(e) =>
                  setBookmarkCard({ ...bookmarkCard, url: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Description"
                className="bg-background"
                onChange={(e) =>
                  setBookmarkCard({
                    ...bookmarkCard,
                    description: e.target.value,
                  })
                }
              />
              <Button
                variant="default"
                onClick={() => {
                  setIsOpen(false);
                  setBookmarkCards([...bookmarkCards, bookmarkCard]);
                }}
              >
                Add
              </Button>
              {/* <DialogDescription>
                This 
              </DialogDescription> */}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <h3>Welcome Home!</h3>
        {bookmarkCards.map((card) => (
          <div key={card.name} className="p-2 border-2 border-primary ">
            <h3>{card.name}</h3>
            <a href={card.url}>{card.url}</a>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
