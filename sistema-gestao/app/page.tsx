"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Toaster, toast } from "sonner";
import {
  BarChart3,
  Boxes,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  LayoutDashboard,
  Menu,
  PackagePlus,
  Plus,
  Search,
  ShoppingCart,
  UserRoundPlus,
  Users,
  WalletCards,
  X,
} from "lucide-react";
type View = "dashboard" | "estoque" | "clientes" | "vendas" | "financeiro";
type Product = {
  id: number;
  name: string;
  sku: string;
  category: string;
  stock: number;
  minStock: number;
  cost: number;
  salePrice: number;
};
type Customer = {
  id: number;
  name: string;
  phone: string;
  document: string;
  city: string;
  createdAt: string;
};
type Sale = {
  id: number;
  customer: string;
  total: number;
  method: string;
  status: string;
  date: string;
};
const money = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    v,
  );
const products0: Product[] = [
  {
    id: 1,
    name: "Roupeiro 6 portas Verona",
    sku: "ROP-VER-06",
    category: "Quarto",
    stock: 3,
    minStock: 2,
    cost: 1280,
    salePrice: 2199,
  },
  {
    id: 2,
    name: "Sofá retrátil Torino 2,30m",
    sku: "SOF-TOR-230",
    category: "Sala",
    stock: 2,
    minStock: 2,
    cost: 1740,
    salePrice: 2990,
  },
  {
    id: 3,
    name: "Mesa Milão com 6 cadeiras",
    sku: "MES-MIL-06",
    category: "Sala de jantar",
    stock: 1,
    minStock: 2,
    cost: 1420,
    salePrice: 2390,
  },
  {
    id: 4,
    name: "Colchão Queen Supreme",
    sku: "COL-SUP-Q",
    category: "Quarto",
    stock: 5,
    minStock: 2,
    cost: 890,
    salePrice: 1590,
  },
];
const customers0: Customer[] = [
  {
    id: 1,
    name: "Mariana Alves",
    phone: "(43) 99912-3401",
    document: "***.482.***-**",
    city: "Siqueira Campos",
    createdAt: "28 ago. 2026",
  },
  {
    id: 2,
    name: "Carlos Eduardo Lima",
    phone: "(43) 99820-7712",
    document: "***.091.***-**",
    city: "Wenceslau Braz",
    createdAt: "27 ago. 2026",
  },
  {
    id: 3,
    name: "Ana Paula Ribeiro",
    phone: "(43) 99114-0850",
    document: "***.364.***-**",
    city: "Joaquim Távora",
    createdAt: "25 ago. 2026",
  },
];
const sales: Sale[] = [
  {
    id: 1048,
    customer: "Mariana Alves",
    total: 2199,
    method: "Crediário · 10x",
    status: "Em dia",
    date: "Hoje, 14:32",
  },
  {
    id: 1047,
    customer: "Carlos Eduardo Lima",
    total: 1590,
    method: "Pix",
    status: "Pago",
    date: "Hoje, 10:18",
  },
  {
    id: 1046,
    customer: "Ana Paula Ribeiro",
    total: 2990,
    method: "Cartão · 6x",
    status: "Pago",
    date: "Ontem, 16:45",
  },
];
const nav = [
  ["dashboard", "Visão geral", LayoutDashboard],
  ["estoque", "Estoque", Boxes],
  ["clientes", "Clientes", Users],
  ["vendas", "Vendas e crediário", ShoppingCart],
  ["financeiro", "Financeiro", CircleDollarSign],
] as const;
export default function Home() {
  const [view, setView] = useState<View>("dashboard"),
    [mobile, setMobile] = useState(false),
    [products, setProducts] = useState(products0),
    [customers, setCustomers] = useState(customers0),
    [dialog, setDialog] = useState<
      "choose" | "product" | "customer" | "sale" | null
    >(null),
    [query, setQuery] = useState("");
  useEffect(() => {
    fetch("/api/dashboard")
      .then((r) => r.json())
      .then((d) => {
        if (d.products?.length) setProducts(d.products);
        if (d.customers?.length) setCustomers(d.customers);
      })
      .catch(() => {});
  }, []);
  const low = products.filter((p) => p.stock <= p.minStock),
    stockValue = products.reduce((s, p) => s + p.cost * p.stock, 0);
  async function save(kind: "product" | "customer", payload: any) {
    try {
      const r = await fetch("/api/dashboard", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind, ...payload }),
      });
      if (!r.ok) throw 0;
      const d = await r.json();
      kind === "product"
        ? setProducts((v) => [d.item, ...v])
        : setCustomers((v) => [d.item, ...v]);
    } catch {
      kind === "product"
        ? setProducts((v) => [{ id: Date.now(), ...payload }, ...v])
        : setCustomers((v) => [{ id: Date.now(), ...payload }, ...v]);
    }
    setDialog(null);
    toast.success("Cadastro salvo com sucesso");
  }
  return (
    <div className="shell">
      <aside className={mobile ? "side open" : "side"}>
        <div className="brand">
          <i>M</i>
          <div>
            <b>MARKA</b>
            <span>GESTÃO</span>
          </div>
          <button onClick={() => setMobile(false)}>
            <X />
          </button>
        </div>
        <nav>
          {nav.map(([id, label, Icon]) => (
            <button
              className={view === id ? "active" : ""}
              key={id}
              onClick={() => {
                setView(id);
                setMobile(false);
              }}
            >
              <Icon />
              <span>{label}</span>
              <ChevronRight />
            </button>
          ))}
        </nav>
        <div className="account">
          <i>MM</i>
          <div>
            <b>Marka Móveis</b>
            <span>Unidade Siqueira Campos</span>
          </div>
        </div>
      </aside>
      <main>
        <header>
          <button className="hamb" onClick={() => setMobile(true)}>
            <Menu />
          </button>
          <div>
            <span>MARKA MÓVEIS</span>
            <h1>{nav.find((n) => n[0] === view)?.[1]}</h1>
          </div>
          <div className="head-actions">
            <small>29 de agosto de 2026</small>
            <Button onClick={() => setDialog("choose")}>
              <Plus />
              Novo cadastro
            </Button>
          </div>
        </header>
        <section className="content">
          {view === "dashboard" && (
            <Dashboard
              products={products}
              customers={customers}
              low={low}
              stockValue={stockValue}
              go={setView}
            />
          )}{" "}
          {view === "estoque" && (
            <Stock
              data={products}
              query={query}
              setQuery={setQuery}
              add={() => setDialog("product")}
            />
          )}{" "}
          {view === "clientes" && (
            <Clients
              data={customers}
              query={query}
              setQuery={setQuery}
              add={() => setDialog("customer")}
            />
          )}{" "}
          {view === "vendas" && <Sales add={() => setDialog("sale")} />}{" "}
          {view === "financeiro" && <Finance />}
        </section>
      </main>
      <Modal state={dialog} set={setDialog} save={save} />
      <Toaster richColors position="top-right" />
    </div>
  );
}
function Title({ eyebrow, title, action, onClick }: any) {
  return (
    <div className="title">
      <div>
        <span>{eyebrow}</span>
        <h3>{title}</h3>
      </div>
      {action && (
        <button onClick={onClick}>
          {action}
          <ChevronRight />
        </button>
      )}
    </div>
  );
}
function Kpi({ icon: Icon, label, value, detail, tone }: any) {
  return (
    <article className="kpi">
      <i className={tone}>
        <Icon />
      </i>
      <div>
        <span>{label}</span>
        <b>{value}</b>
        <small>{detail}</small>
      </div>
    </article>
  );
}
function Dashboard({ products, customers, low, stockValue, go }: any) {
  return (
    <>
      <div className="welcome">
        <div className="welcome-main">
          <span>FATURAMENTO EM AGOSTO</span>
          <h2>{money(24870)}</h2>
          <p>
            <b>+12,4%</b> em relação ao mês anterior
          </p>
          <div className="banner-bars" aria-hidden="true">
            {[34, 48, 42, 61, 55, 72, 68, 84, 77, 91, 86, 100].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="welcome-goal">
          <div>
            <span>META DO MÊS</span>
            <b>83%</b>
          </div>
          <div className="goal-track">
            <i />
          </div>
          <small>
            {money(5130)} para alcançar {money(30000)}
          </small>
        </div>
        <button className="welcome-alert" onClick={() => go("estoque")}>
          <span>
            <Boxes />
          </span>
          <div>
            <small>ESTOQUE</small>
            <b>{low.length} itens precisam de atenção</b>
          </div>
          <ChevronRight />
        </button>
      </div>
      <div className="kpis">
        <Kpi
          icon={CircleDollarSign}
          label="Vendas no período"
          value={money(6779)}
          detail="3 vendas registradas"
          tone="green"
        />
        <Kpi
          icon={WalletCards}
          label="A receber"
          value={money(8230)}
          detail="18 parcelas em aberto"
          tone="blue"
        />
        <Kpi
          icon={Boxes}
          label="Valor em estoque"
          value={money(stockValue)}
          detail={`${products.reduce((s: number, p: Product) => s + p.stock, 0)} unidades disponíveis`}
          tone="gold"
        />
        <Kpi
          icon={Users}
          label="Clientes ativos"
          value={customers.length + 284}
          detail="+12 neste mês"
          tone="purple"
        />
      </div>
      <div className="grid">
        <article className="panel">
          <Title
            eyebrow="MOVIMENTO"
            title="Vendas recentes"
            action="Ver todas"
            onClick={() => go("vendas")}
          />
          <SalesTable />
        </article>
        <article className="panel">
          <Title
            eyebrow="ATENÇÃO"
            title="Estoque baixo"
            action="Abrir estoque"
            onClick={() => go("estoque")}
          />
          <div className="alerts">
            {low.map((p: Product) => (
              <div key={p.id}>
                <i>{p.stock}</i>
                <span>
                  <b>{p.name}</b>
                  <small>
                    {p.sku} · mínimo {p.minStock}
                  </small>
                </span>
                <ChevronRight />
              </div>
            ))}
          </div>
        </article>
      </div>
      <div className="grid bottom">
        <article className="panel">
          <Title eyebrow="DESEMPENHO" title="Vendas dos últimos 6 meses" />
          <div className="bars">
            {[44, 61, 49, 73, 67, 88].map((h, i) => (
              <div key={i}>
                <i style={{ height: h + "%" }}></i>
                <small>{["Mar", "Abr", "Mai", "Jun", "Jul", "Ago"][i]}</small>
              </div>
            ))}
          </div>
        </article>
        <article className="panel">
          <Title eyebrow="CREDIÁRIO" title="Resumo de recebimentos" />
          <div className="credit">
            {[
              ["Em dia", 6410, "14 parcelas"],
              ["Vencendo", 1820, "4 parcelas"],
              ["Em atraso", 680, "2 parcelas"],
            ].map(([a, b, c]) => (
              <div key={a as string}>
                <span>{a}</span>
                <b>{money(b as number)}</b>
                <small>{c}</small>
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
function Head({ title, text, button, onClick }: any) {
  return (
    <div className="pagehead">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {button && (
        <Button onClick={onClick}>
          <Plus />
          {button}
        </Button>
      )}
    </div>
  );
}
function Searcher({ query, setQuery, text }: any) {
  return (
    <div className="filters">
      <label>
        <Search />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={text}
        />
      </label>
    </div>
  );
}
function Stock({ data, query, setQuery, add }: any) {
  const rows = data.filter((p: Product) =>
    (p.name + p.sku + p.category).toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <Head
        title="Controle de estoque"
        text="Acompanhe entradas, disponibilidade, custos e margem de cada produto."
        button="Cadastrar produto"
        onClick={add}
      />
      <Searcher
        query={query}
        setQuery={setQuery}
        text="Buscar por produto, código ou categoria..."
      />
      <article className="panel table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Estoque</TableHead>
              <TableHead>Custo</TableHead>
              <TableHead>Venda</TableHead>
              <TableHead>Margem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((p: Product) => (
              <TableRow key={p.id}>
                <TableCell>
                  <b>{p.name}</b>
                  <small>{p.sku}</small>
                </TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>
                  <Badge className={p.stock <= p.minStock ? "bad" : "ok"}>
                    {p.stock} un.
                  </Badge>
                </TableCell>
                <TableCell>{money(p.cost)}</TableCell>
                <TableCell>
                  <b>{money(p.salePrice)}</b>
                </TableCell>
                <TableCell>
                  {Math.round(((p.salePrice - p.cost) / p.salePrice) * 100)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
    </>
  );
}
function Clients({ data, query, setQuery, add }: any) {
  const rows = data.filter((c: Customer) =>
    (c.name + c.phone + c.city).toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <Head
        title="Cadastro de clientes"
        text="Dados completos para notas, vendas, entregas e análise do crediário."
        button="Cadastrar cliente"
        onClick={add}
      />
      <Searcher
        query={query}
        setQuery={setQuery}
        text="Buscar por nome, telefone ou cidade..."
      />
      <article className="panel table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Documento</TableHead>
              <TableHead>Cidade</TableHead>
              <TableHead>Cadastro</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((c: Customer) => (
              <TableRow key={c.id}>
                <TableCell>
                  <b>{c.name}</b>
                </TableCell>
                <TableCell>{c.phone}</TableCell>
                <TableCell>{c.document}</TableCell>
                <TableCell>{c.city}</TableCell>
                <TableCell>{c.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
    </>
  );
}
function Sales({ add }: any) {
  return (
    <>
      <Head
        title="Vendas e crediário"
        text="Registre vendas, acompanhe boletos internos e dê baixa nos recebimentos."
        button="Nova venda"
        onClick={add}
      />
      <div className="kpis mini">
        <Kpi
          icon={ShoppingCart}
          label="Vendido"
          value={money(6779)}
          detail="No período"
          tone="green"
        />
        <Kpi
          icon={ClipboardList}
          label="Boletos internos"
          value="18"
          detail="Em aberto"
          tone="blue"
        />
        <Kpi
          icon={CircleDollarSign}
          label="Recebido"
          value={money(5410)}
          detail="No período"
          tone="gold"
        />
      </div>
      <article className="panel table">
        <SalesTable />
      </article>
    </>
  );
}
function SalesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Venda</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Pagamento</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sales.map((s) => (
          <TableRow key={s.id}>
            <TableCell>
              <b>#{s.id}</b>
              <small>{s.date}</small>
            </TableCell>
            <TableCell>{s.customer}</TableCell>
            <TableCell>{s.method}</TableCell>
            <TableCell>
              <Badge className="ok">{s.status}</Badge>
            </TableCell>
            <TableCell>
              <b>{money(s.total)}</b>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
function Finance() {
  return (
    <>
      <Head
        title="Gestão financeira"
        text="Visão clara do que entrou, do que falta receber e da saúde da operação."
      />
      <div className="kpis">
        <Kpi
          icon={CircleDollarSign}
          label="Receitas"
          value={money(24870)}
          detail="Agosto de 2026"
          tone="green"
        />
        <Kpi
          icon={WalletCards}
          label="Contas a receber"
          value={money(8230)}
          detail="18 parcelas"
          tone="blue"
        />
        <Kpi
          icon={BarChart3}
          label="Margem bruta"
          value="41,8%"
          detail="+2,3 p.p. no mês"
          tone="gold"
        />
        <Kpi
          icon={ClipboardList}
          label="Em atraso"
          value={money(680)}
          detail="2 parcelas"
          tone="purple"
        />
      </div>
      <div className="grid">
        <article className="panel">
          <Title eyebrow="FLUXO" title="Entradas por forma de pagamento" />
          <div className="payments">
            {[
              ["Pix", 8420, 34],
              ["Cartão", 7660, 31],
              ["Crediário", 6210, 25],
              ["Dinheiro", 2580, 10],
            ].map(([n, v, p]) => (
              <div key={n as string}>
                <span>
                  {n}
                  <b>{money(v as number)}</b>
                </span>
                <i>
                  <b style={{ width: p + "%" }}></b>
                </i>
                <small>{p}% das receitas</small>
              </div>
            ))}
          </div>
        </article>
        <article className="panel forecast">
          <Title eyebrow="PRÓXIMOS 7 DIAS" title="Previsão de recebimento" />
          <b>{money(3140)}</b>
          <p>8 parcelas previstas</p>
          {[
            ["30 ago.", 780],
            ["02 set.", 1290],
            ["04 set.", 1070],
          ].map(([d, v]) => (
            <div key={d as string}>
              <span>{d}</span>
              <b>{money(v as number)}</b>
            </div>
          ))}
        </article>
      </div>
    </>
  );
}
function Modal({ state, set, save }: any) {
  return (
    <Dialog open={!!state} onOpenChange={(o) => !o && set(null)}>
      <DialogContent className="modal-card sm:max-w-[620px]">
        {state === "choose" ? (
          <>
            <DialogHeader className="modal-heading">
              <span className="modal-kicker">CADASTRO RÁPIDO</span>
              <DialogTitle>O que deseja cadastrar?</DialogTitle>
              <DialogDescription>
                Escolha uma operação. Você poderá revisar os dados antes de
                salvar.
              </DialogDescription>
            </DialogHeader>
            <div className="choices">
              <button onClick={() => set("product")}>
                <PackagePlus />
                <b>Produto</b>
                <span>Entrada e precificação</span>
              </button>
              <button onClick={() => set("customer")}>
                <UserRoundPlus />
                <b>Cliente</b>
                <span>Dados e documentos</span>
              </button>
              <button onClick={() => set("sale")}>
                <ShoppingCart />
                <b>Venda</b>
                <span>À vista ou crediário</span>
              </button>
            </div>
          </>
        ) : state === "product" ? (
          <ProductForm save={(p: any) => save("product", p)} />
        ) : state === "customer" ? (
          <CustomerForm save={(p: any) => save("customer", p)} />
        ) : (
          <>
            <DialogHeader className="modal-heading">
              <span className="modal-kicker">NOVA VENDA</span>
              <DialogTitle>Registrar nova venda</DialogTitle>
              <DialogDescription>
                Fluxo de venda e baixa de estoque preparado para a próxima
                etapa.
              </DialogDescription>
            </DialogHeader>
            <div className="form">
              <label>
                Cliente
                <Input placeholder="Nome ou CPF" />
              </label>
              <label>
                Produto
                <Input placeholder="Nome ou código" />
              </label>
              <label>
                Valor da venda
                <Input type="number" />
              </label>
            </div>
            <Button
              onClick={() => toast.info("Preencha os dados para continuar")}
            >
              Continuar venda
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
function ProductForm({ save }: any) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        save({
          name: f.get("name"),
          sku: f.get("sku"),
          category: f.get("category"),
          stock: +f.get("stock")!,
          minStock: +f.get("minStock")!,
          cost: +f.get("cost")!,
          salePrice: +f.get("salePrice")!,
        });
      }}
    >
      <DialogHeader className="modal-heading">
        <span className="modal-kicker">ESTOQUE E PRECIFICAÇÃO</span>
        <DialogTitle>Cadastrar produto</DialogTitle>
        <DialogDescription>
          Informe custo e preço final; a margem será calculada automaticamente.
        </DialogDescription>
      </DialogHeader>
      <div className="form-section-title">
        <span>01</span>Identificação do produto
      </div>
      <div className="form">
        <label className="wide">
          Nome
          <Input name="name" required />
        </label>
        <label>
          Código / SKU
          <Input name="sku" required />
        </label>
        <label>
          Categoria
          <Input name="category" required />
        </label>
      </div>
      <div className="form-section-title">
        <span>02</span>Estoque e valores
      </div>
      <div className="form">
        <label>
          Quantidade
          <Input name="stock" type="number" required />
        </label>
        <label>
          Estoque mínimo
          <Input name="minStock" type="number" defaultValue="2" required />
        </label>
        <label>
          Custo
          <Input name="cost" type="number" step=".01" required />
        </label>
        <label>
          Preço final
          <Input name="salePrice" type="number" step=".01" required />
        </label>
      </div>
      <Button className="submit">Salvar produto</Button>
    </form>
  );
}
function CustomerForm({ save }: any) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        save({
          name: f.get("name"),
          phone: f.get("phone"),
          document: f.get("document"),
          city: f.get("city"),
          createdAt: "Hoje",
        });
      }}
    >
      <DialogHeader className="modal-heading">
        <span className="modal-kicker">CADASTRO E CREDIÁRIO</span>
        <DialogTitle>Cadastrar cliente</DialogTitle>
        <DialogDescription>
          Dados usados no atendimento, entrega, nota fiscal e crediário.
        </DialogDescription>
      </DialogHeader>
      <div className="form-section-title">
        <span>01</span>Dados principais
      </div>
      <div className="form">
        <label className="wide">
          Nome completo
          <Input name="name" required />
        </label>
        <label>
          Telefone
          <Input name="phone" required />
        </label>
        <label>
          CPF / CNPJ
          <Input name="document" required />
        </label>
        <label className="wide">
          Endereço
          <Input name="address" />
        </label>
        <label>
          Cidade
          <Input name="city" required />
        </label>
      </div>
      <div className="form-section-title">
        <span>02</span>Informações complementares
      </div>
      <div className="form">
        <label>
          Data de nascimento
          <Input name="birth" type="date" />
        </label>
        <label>
          Nome do pai
          <Input name="father" />
        </label>
        <label>
          Nome da mãe
          <Input name="mother" />
        </label>
        <label className="wide">
          Local de trabalho
          <Input name="workplace" />
        </label>
      </div>
      <Button className="submit">Salvar cliente</Button>
    </form>
  );
}
