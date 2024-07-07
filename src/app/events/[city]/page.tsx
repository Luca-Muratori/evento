import EventsList from "@/components/events-list";
import H1 from "@/components/H1";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = {
  params: {
    city: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const page = searchParams.page ?? 1;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("invalid page number");
  }
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
