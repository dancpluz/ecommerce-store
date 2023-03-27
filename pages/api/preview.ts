import type { NextApiRequest, NextApiResponse } from 'next'

// Função para acessar o modo preview ao digitar "url"/api/preview

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.writeHead(307, { Location: '/' })
  res.end();
}