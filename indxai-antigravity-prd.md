# Product Requirements Document: Project Antigravity
**Enterprise AI Token Optimization Proxy Middleware for indxai**

---

## 1. Vision & Success Metrics

**Vision:** To build a frictionless proxy layer that sits between enterprise applications and commercial LLM APIs, mathematically reducing token weight and stripping sensitive data before it reaches external servers.

**Success Metric:** Achieve a minimum 30% reduction in API token costs with zero degradation in end-user response quality and sub-100ms processing latency.

---

## 2. Core Features & Requirements

| Feature | Description | Technical Requirement |
| :--- | :--- | :--- |
| **Universal API Proxy** | A single gateway that intercepts requests and normalizes them for any commercial provider (OpenAI, Anthropic, Gemini). | Must support standard OpenAI API schema for drop-in replacement by clients. |
| **Semantic & Exact Caching** | A two-tier cache to catch identical or semantically identical queries and return them instantly. | Tier 1: Key-Value store. Tier 2: Vector DB for intent matching. |
| **Token Compression Engine** | Algorithmic reduction of prompt context before sending upstream. | Dynamic thresholding (only compress prompts > 500 tokens). |
| **Enterprise Privacy Firewall** | Automated detection and masking of PII (names, emails, internal keys) before payload leaves the VPC. | Regex and lightweight NER (Named Entity Recognition) pipeline. |
| **Observability Telemetry** | Granular logging of input/output tokens, cost savings, and latency per request. | Asynchronous logging to prevent blocking the main request thread. |

---

## 3. Architecture & Tech Stack

To keep the system highly performant and easy to deploy, the stack relies on robust, open-source standards:

* **Gateway / Routing:** FastAPI (Python) running **LiteLLM** for routing logic. Python ensures native compatibility with AI compression libraries.
* **Caching Layer:** **Redis** for exact-match caching and rate-limiting; **Qdrant** or **Milvus** (local Docker containers) for fast vector embeddings (semantic caching).
* **Telemetry:** **Langfuse** (self-hosted) to capture traces, calculate cost deltas, and store evaluation scores.
* **Deployment:** Packaged as a lightweight Docker image so enterprise clients can deploy it entirely within their own Virtual Private Cloud (VPC).

---

## 4. Engineering Execution Plan (Sprint 1)

**AI & Data Science Lead (The Intelligence Layer)**
* **Focus:** Compression & Evaluation.
* **Tasks:** Build the token compression heuristics (deciding what gets stripped vs. kept). Design the prompt for the LLM-as-a-judge evaluation pipeline to mathematically score the quality of compressed outputs against raw outputs. Generate the embedding strategy for the semantic cache.

**Computer Science Engineer 1 (The Infrastructure)**
* **Focus:** Proxy & Routing.
* **Tasks:** Set up the FastAPI server and integrate LiteLLM. Build the main `/v1/chat/completions` endpoint. Handle asynchronous payload forwarding to the commercial APIs and manage fallback logic (e.g., if the primary API times out).

**Computer Science Engineer 2 (Data & State)**
* **Focus:** Caching & Memory.
* **Tasks:** Deploy Redis and the Vector DB. Write the middleware logic that intercepts a request, checks Tier 1 (Exact Match), checks Tier 2 (Semantic Match), and returns the cached response if a hit occurs, effectively bypassing the external API entirely.

**Computer Science Engineer 3 (Security & Telemetry)**
* **Focus:** Privacy & Observability.
* **Tasks:** Build the PII masking pipeline (the "Privacy Firewall") that scrubs the payload before routing. Integrate Langfuse SDK to silently log every transaction, tracking the "tokens saved" metric that will power the client dashboard.

---

## 5. Presentation & Pitch Constraints

When presenting Antigravity in high-level innovation competitions or client meetings, the design language must remain strictly minimalist and highly technical:

* **No Clutter:** Use simple, high-contrast blocks for architecture diagrams: `Client -> Antigravity -> Commercial API`.
* **Focus on the Delta:** Show a single slide highlighting the cost difference between 1 million raw tokens and 1 million Antigravity-optimized tokens.
* **The Privacy Hook:** Lead with the token savings to capture attention, but position the local PII firewall as the absolute enterprise necessity.
