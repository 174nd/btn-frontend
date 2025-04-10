import React, { ReactNode } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";

import { AiOutlineBold, AiOutlineItalic } from "react-icons/ai";
import { MdFormatUnderlined, MdStrikethroughS } from "react-icons/md";
import { BsListUl, BsListOl } from "react-icons/bs";
import { LuParentheses } from "react-icons/lu";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Label } from "./label";

import { Editor, Editor as TiptapEditor } from "@tiptap/core";
import * as ScrollArea from "@radix-ui/react-scroll-area";

interface ToolbarButton {
  icon: ReactNode;
  action: (editor: Editor) => void;
  activeCheck: (editor: Editor) => boolean;
  isSeparator?: false;
}

interface Separator {
  isSeparator: true;
}

type ToolbarButtonOrSeparator = ToolbarButton | Separator;

const MenuBar: React.FC<{ editor: TiptapEditor | null }> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const toolbarButtons: ToolbarButtonOrSeparator[] = [
    {
      icon: <AiOutlineBold />,
      action: (editor: Editor) => editor.chain().focus().toggleBold().run(),
      activeCheck: (editor: Editor) => editor.isActive("bold"),
    },
    {
      icon: <AiOutlineItalic />,
      action: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
      activeCheck: (editor: Editor) => editor.isActive("italic"),
    },
    {
      icon: <MdFormatUnderlined />,
      action: (editor: Editor) => editor.chain().focus().toggleUnderline().run(),
      activeCheck: (editor: Editor) => editor.isActive("underline"),
    },
    {
      icon: <MdStrikethroughS />,
      action: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
      activeCheck: (editor: Editor) => editor.isActive("strike"),
    },
    {
      icon: <LuParentheses />,
      action: (editor: Editor) => {
        editor.chain().focus().insertContent("()").run();
        editor.commands.setTextSelection({
          from: editor.state.selection.from - 1,
          to: editor.state.selection.from - 1,
        });
      },
      activeCheck: () => false,
    },
    { isSeparator: true },
    {
      icon: <BsListUl />,
      action: (editor: Editor) => editor.chain().focus().toggleBulletList().run(),
      activeCheck: (editor: Editor) => editor.isActive("bulletList"),
    },
    {
      icon: <BsListOl />,
      action: (editor: Editor) => editor.chain().focus().toggleOrderedList().run(),
      activeCheck: (editor: Editor) => editor.isActive("orderedList"),
    },
    { isSeparator: true },
  ];

  return (
    <ScrollArea.Root type="scroll" scrollHideDelay={100} className="w-full overflow-hidden">
      <ScrollArea.Viewport className="w-full">
        <div className="border-primary-700 flex w-full items-center space-x-2 border-b px-2 py-2">
          {/* Semua tombol toolbar di sini */}
          {toolbarButtons.map((button, index) => {
            if (button.isSeparator) {
              return <div key={index} className="mx-2 h-5 w-fit border-l" />;
            } else {
              return (
                <button
                  key={index}
                  onClick={() => button!.action(editor)}
                  className={`hover:bg-primary-700 rounded p-1 transition-colors hover:text-white ${
                    button.activeCheck(editor) && "bg-primary-700 text-white"
                  }`}
                >
                  {/* Menambahkan class dari iconSizeClass */}
                  {React.cloneElement(button.icon as any, { className: cn("text-lg") })}
                </button>
              );
            }
          })}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal" className="bg-primary-200 h-1">
        <ScrollArea.Thumb className="bg-primary-600 rounded" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

// Style seperti inputVariants
export const editorVariants = cva(
  "flex w-full rounded-md border border-primary-700 focus-within:bg-primary-100 group-hover:bg-primary-200 hover:bg-primary-200 transition-colors bg-transparent text-base placeholder:text-muted-foreground group-focus-visible:outline-none group-focus-visible:ring-0 group-focus-visible:ring-primary-700 group-focus-visible:ring-offset-0 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "text-sm min-h-[120px]",
        default: "text-base min-h-[160px]",
        lg: "text-lg min-h-[200px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface TextEditorProps extends VariantProps<typeof editorVariants>, Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  className?: string;
  placeholder?: string;

  label?: React.ReactNode;
  hint?: string;
  error?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const TextEditor = React.forwardRef<HTMLDivElement, TextEditorProps>(
  ({ className, label, hint, error, size, value, onValueChange, placeholder, id, ...props }, ref) => {
    const inputId = id || React.useId();
    const editor = useEditor({
      extensions: [
        StarterKit.configure({
          // penting untuk mengaktifkan paragraf & isi kosong
          paragraph: {
            HTMLAttributes: {
              class: "paragraph",
            },
          },
        }),
        Underline,
        Placeholder.configure({
          placeholder: placeholder || "",
          emptyEditorClass: "is-editor-empty text-black",
          showOnlyWhenEditable: true,
          showOnlyCurrent: false,
        }),
      ],
      content: value || "",
      autofocus: false, // 👈 tidak akan auto focus saat load
      onUpdate: ({ editor }) => {
        onValueChange?.(editor.getHTML());
      },
    });

    return (
      <div className="group space-y-1">
        {label && (
          <Label
            htmlFor={inputId}
            className="text-foreground block text-sm font-medium"
            onClick={(e) => {
              e.preventDefault();
              editor?.chain().focus("end").run();
            }}
          >
            {label}
          </Label>
        )}

        <div className={cn(editorVariants({ size }), error && "border-red-500", "flex flex-col", className)} id={inputId} ref={ref} {...props}>
          {/* Toolbar */}
          <MenuBar editor={editor} />

          {/* Editor */}
          <EditorContent
            editor={editor}
            className="[&_.ProseMirror]:text-foreground [&_.is-editor-empty]:before:text-muted-foreground min-h-[120px] w-full p-2 outline-none [&_.ProseMirror]:font-sans [&_.ProseMirror]:text-base [&_.ProseMirror]:[all:unset] [&_.is-editor-empty]:before:pointer-events-none [&_.is-editor-empty]:before:absolute [&_.is-editor-empty]:before:pl-1 [&_.is-editor-empty]:before:opacity-50 [&_.is-editor-empty]:before:content-[attr(data-placeholder)]"
          />
        </div>

        {hint && <p className={cn("text-sm", !error ? "text-black/50" : "text-red-500")}>{hint}</p>}
      </div>
    );
  },
);

TextEditor.displayName = "TextEditor";
