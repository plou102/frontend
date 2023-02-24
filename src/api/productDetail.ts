import { client } from "./api";

const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo4LFwiZW1haWxcIjpcImNvY29AZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcImF1dGhvcml0aWVzXCI6bnVsbCxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcInBhc3N3b3JkXCI6bnVsbCxcInVzZXJuYW1lXCI6XCJjb2NvQGVtYWlsLmNvbVwifSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MTg0MDYzLCJleHAiOjE2NzcxODc2NjN9.bpPC6RP1WjQcqJo2qKg9k6Zy-sBkw79QmRVMeyMhtPs";

const Headers = {
  Authorization: `Bearer ${accessToken}`,
};

// 제품 상세 정보 불러오기
export const getDetail = async (id: string) => {
  const res = await client.get(`/product/${id}`, {
    headers: Headers,
  });
  return res.data.data;
};
