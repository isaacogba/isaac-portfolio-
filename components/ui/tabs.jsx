"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

/* Root */
const Tabs = React.forwardRef(function Tabs(
  {
    className,
    defaultValue,     // <- allow correct Radix props
    value,
    onValueChange,
    ...rest           // any other valid Radix.Root props
  },
  ref
) {
  return (
    <TabsPrimitive.Root
      ref={ref}
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      {...rest}
    />
  );
});

/* List */
const TabsList = React.forwardRef(function TabsList(
  { className, ...rest },
  ref
) {
  return (
    <TabsPrimitive.List
      ref={ref}
      data-slot="tabs-list"
      className={cn("inline-flex h-auto rounded-md p-1 text-primary", className)}
      {...rest}
    />
  );
});

/* Trigger */
const TabsTrigger = React.forwardRef(function TabsTrigger(
  { className, ...rest },
  ref
) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-balance font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm",
        className
      )}
      {...rest}
    />
  );
});

/* Content */
const TabsContent = React.forwardRef(function TabsContent(
  { className, ...rest },
  ref
) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...rest}
    />
  );
});

export { Tabs, TabsList, TabsTrigger, TabsContent };
