import { createClient, type RedisClientType } from "redis";
import { env } from "./env";

const client: RedisClientType = createClient({
  url: env.REDIS_URL,
});

let connectPromise: Promise<RedisClientType> | null = null;

async function getClient() {
  if (!client.isOpen) {
    connectPromise ||= client.connect();
    await connectPromise;
  }

  return client;
}

function dayKey() {
  return new Date().toISOString().slice(0, 10);
}

export async function pageView(path: string) {
  const cleanPath = path.split("?")[0];
  const redisClient = await getClient();
  await redisClient.hIncrBy(`analytics:${dayKey()}:page_views`, cleanPath, 1);
}

export async function buttonClick(path: string, name: string) {
  const cleanPath = path.split("?")[0];
  const redisClient = await getClient();
  await redisClient.hIncrBy(
    `analytics:${dayKey()}:button_clicks`,
    `${cleanPath}:${name}`,
    1,
  );
}
